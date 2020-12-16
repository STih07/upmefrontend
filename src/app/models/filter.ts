export interface Filter {
  hasGlobalSearch: boolean;
  list: List[];
}

export interface List {
  title: string;
  hasSearch: boolean;
  childs: ChildList[];
}

export interface ChildList {
  title: string;
}
