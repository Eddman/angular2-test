define(['exports',
        '@angular/core',
        '@angular/platform-browser',
        '@angular/forms',
        './app.component',
        './dashboard.component',
        './hero-detail.component',
        './heroes.component',
        './hero.service',
        './app-routing.module'],
    function (exports, ngCore, ngBrowser, ngForms, appComponent, dashboard,
              heroDetail, heroesComponent, hero, routing) {
        function AppModule() {
        }

        AppModule.annotations = [
            new ngCore.NgModule({
                imports: [
                    ngBrowser.BrowserModule,
                    ngForms.FormsModule,
                    routing.AppRoutingModule
                ],
                declarations: [
                    appComponent.AppComponent,
                    dashboard.DashboardComponent,
                    heroDetail.HeroDetailComponent,
                    heroesComponent.HeroesComponent
                ],
                providers: [hero.HeroService],
                bootstrap: [appComponent.AppComponent]
            })
        ];

        exports.AppModule = AppModule;
    });
