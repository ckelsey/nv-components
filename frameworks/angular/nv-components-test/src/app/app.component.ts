import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'nv-components-test';

    checkboxLabel = `A test checkbox`
    checkboxDisabled = false
    checkboxValue = true
    checkboxWhenUpdate = (data) => {
        this.changeCheckBox(data.newValue)
    }

    changeCheckBox(val){
        this.checkboxValue = val
        this.cd.detectChanges()
    }

    constructor(private cd: ChangeDetectorRef) {}
}
