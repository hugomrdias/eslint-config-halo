/* eslint-disable import/no-unassigned-import */
import './globals';
// /* eslint-enable  import/no-unassigned-import */
import Bugsnag from 'bugsnag-js';
import M from 'backbone.marionette';
import Layout from './modules/app/layouts/layout';
import App from './modules/app/app';
import User from './modules/auth/models/user';
import appRouter from './modules/app/router';
import authRouter from './modules/auth/router';
import mallRouter from './modules/malls/router';
import configRouter from './modules/config/router';
import usersRouter from './modules/generic/users/router';
import InfoCard from './modules/app/components/info-card/info-card';

App.info(
    'Movves ' +
        App.config.version +
        ' in ' +
        App.config.mode +
        ' mode. API: ' +
        App.config.api
);

// Routing
App.start()
    .then(() => {
        App.user = new User();
        Bugsnag.user = App.user.attributes;
        App.router.base(App.config.root);
        const T = M.Application.extend({ region: '#app' });
        const myApp = new T();

        App.layout = new Layout();
        myApp.showView(App.layout);

        // Routers
        appRouter();
        authRouter();
        mallRouter();
        configRouter();
        usersRouter();

        App.router('*', (ctx) => {
            ctx.layout.changeTitle('Not found');
            ctx.layout.setContent(
                new InfoCard({
                    title: App.translate('sorry'),
                    description: App.translate('page-not-found')
                })
            );
        });
        App.router.start();

        return null;
    })
    .catch(App.notify);

function s(col, key, level) {
    level[key] = col.reduce(
        (acc, item) => (item.level_id === level.id ? acc.concat(item.id) : acc),
        []
    );

    return level;
}

function render(date, points) {
    return `
        <div style="padding-bottom: 6px">
        ${date}
        </div>
        <table class="Tooltip-table">
            ${points
        .map(
            point => `<tr>
                    <td>
                    <span style="vertical-align:top;display:inline-block;color: ${point.seriesColor}">
                        ${point.seriesSymbol}&nbsp;
                    </span>
                    <span style="vertical-align:top;display:inline-block;max-width:120px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                        ${point.seriesName}
                    </span>
                        &nbsp; &nbsp;
                    </td>
                    <td style="line-height: 20px; text-align: right; font-weight: bold">
                    ${point.y}
                    </td>
                </tr>`
        )
        .join('')}
        </table>
        `;
}
