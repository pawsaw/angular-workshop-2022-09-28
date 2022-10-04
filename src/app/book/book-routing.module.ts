import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book.component';
import { CanLeaveGuard } from './can-leave.guard';

const routes: Routes = [
  {
    path: 'details/:isbn',
    component: BookDetailComponent,
    canDeactivate: [CanLeaveGuard],
  },
  {
    path: 'edit/:isbn',
    component: BookEditComponent,
  },
  {
    path: '',
    component: BookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
