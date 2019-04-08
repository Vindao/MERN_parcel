
    /* eslint-disable */
    /* tslint:disable */
     
    import {assignImportedComponents} from 'react-imported-component';
    
    const applicationImports = [
      () => import('./Pages/About'),
    ];
    
    assignImportedComponents(applicationImports);
    export default applicationImports;