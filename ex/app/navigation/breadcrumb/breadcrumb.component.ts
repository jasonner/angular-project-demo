import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExBreadcrumbComponent {
  
  code: string[] = code
  page: any = {
    previous: { name: 'Nav-menu 导航菜单', link: '/nav/menu' },
    next: { name: 'Steps 步骤条', link: '/nav/steps' },
  }
  exClass: any = class {
    handle(path: string): void {
      console.log(path)
    }
  }
  
}
