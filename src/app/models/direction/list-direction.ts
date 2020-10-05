export interface ListDirection {
  name: string;
  mentor: {
    icon: string;
    name: string;
    id: number;
  };
  schelude: string;
  residents: number;
  candidates: number;
  duration: {
    start?: string;
    end?: string;
  };
  id: number;
}
