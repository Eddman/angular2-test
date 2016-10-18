define(['module', 'exports', '@angular/core'], function (module, exports, ng) {
    function AppComponent() {
        this.title = 'Tour of Heroes'
    }

    AppComponent.annotations = [
        new ng.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        })
    ];

    exports.AppComponent = AppComponent;
});
