import { BehaviorSubject, Observable } from 'rxjs';

export class ObservableList<Type> {
  data: Type[];
  data$: BehaviorSubject<Type[]>;

  constructor(initialData?: Type[]) {
    this.data = initialData != null ? initialData : [];
    this.data$ = new BehaviorSubject(this.data);
  }

  public getAll$(): Observable<Type[]> {
    return this.data$;
  }

  public filter$(predicate: Function): Observable<Type[]> {
    const result: Type[] = [];
    this.data.forEach((element) => {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return new BehaviorSubject(result);
  }

  public push(object: Type) {
    this.data.push(object);
    this.data$.next(this.data);
  }

  public sort(comparator: Function) {
    this.data.sort(comparator());
    this.data$.next(this.data);
  }
}
