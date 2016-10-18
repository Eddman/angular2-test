define(['module', 'exports', '@angular/core'], function (module, exports, ngCore) {
    function AppComponent() {
        this.title = 'Tour of Heroes'
    }

    AppComponent.annotations = [
        new ngCore.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        })
    ];

    exports.AppComponent = AppComponent;
});
