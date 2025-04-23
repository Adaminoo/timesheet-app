import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private environmentInjector = inject(EnvironmentInjector);

  constructor(
    private db: AngularFirestore
  ) { }

  saveEmployeeHours(employee: Employee): any {
    return runInInjectionContext(this.environmentInjector, () => {
      this.db.collection('employee-hours').add(employee);
    })
  }
}
