import { CanDeactivateFn } from '@angular/router';
import { ListPostsComponent } from '../pages/list-posts/list-posts.component';

export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  const currentComponent = component as ListPostsComponent;


  if(currentComponent.form.invalid && currentComponent.form.dirty){
    return window.confirm('¿Está seguro de salir ahora?, los cambios se eliminarán.');
  }
  return true;
};
