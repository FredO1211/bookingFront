import { MatPaginator } from '@angular/material/paginator';

export class DefaultPaginatorConfig {
  static init(paginator: MatPaginator) {
    paginator._intl.itemsPerPageLabel = 'Elementów na stronie:';
    paginator._intl.getRangeLabel = (page, pagesize, length) => {
      let fromValue = '0';
      let toValue = '';
      if (length > 0) {
        fromValue = (page * pagesize + 1).toString();
        if (length % pagesize != 1 || (page + 1) * pagesize < length)
          toValue =
            '-' +
            (length > pagesize * (page + 1) ? pagesize * (page + 1) : length);
      }

      return `${fromValue}${toValue} z ${length}`;
    };
  }
}
