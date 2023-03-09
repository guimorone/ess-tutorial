export function formatNumber(
  value: number,
  style: 'decimal' | 'currency' | 'percent' | 'unit' = 'currency',
  format: string = 'pt-BR',
  currency: string = 'BRL'
): string {
  const moreOptions: {
    minimumFractionDigits: number | undefined;
    maximumFractionDigits: number | undefined;
    minimumSignificantDigits: number | undefined;
    maximumSignificantDigits: number | undefined;
  } = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
    minimumSignificantDigits: style !== 'currency' ? 1 : undefined,
    maximumSignificantDigits: style !== 'currency' ? 20 : undefined,
  };

  return new Intl.NumberFormat(format, {
    style,
    currency,
    ...moreOptions,
  }).format(value);
}

export function divideArray(arr: any[], elementsPerIndex = 3): any[][] {
  const copy = [...arr];

  return new Array(Math.ceil(copy.length / elementsPerIndex))
    .fill(undefined)
    .map(() => copy.splice(0, elementsPerIndex));
}

export function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ');
}

export const csvStringFromArrayOfObjects = (header: string[], array: Object[], separator = ';'): string =>
  [
    header,
    ...array.map(item => {
      const newArray: any = [];

      Object.values(item).forEach(value => newArray.push(value));

      return newArray;
    }),
  ]
    .map(e => e.join(separator))
    .join('\n');

export function onDownloadButtonClick(header: string[], data: Object[], downloadTitle: string): void {
  const csv = csvStringFromArrayOfObjects(header, data);

  const hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = `${downloadTitle}_${new Date().toLocaleDateString()}.csv`;
  hiddenElement.click();
  hiddenElement.remove();
}

// \u00A0 == &nbsp;
export const noBreakLineSpace = (str: string): string =>
  typeof str === 'string' ? str.split(' ').join('\u00A0') : str;

export const checkIfObjectIsEmpty = (obj: Object): boolean =>
  !obj || (!Object.keys(obj).length && Object.getPrototypeOf(obj) === Object.prototype);

export const checkIfTwoObjectsAreEqual = (obj1: any | Object, obj2: any | Object): boolean => {
  const ok = Object.keys,
    tx = typeof obj1,
    ty = typeof obj2;

  return obj1 && obj2 && tx === 'object' && tx === ty
    ? ok(obj1).length === ok(obj2).length && ok(obj1).every(key => checkIfTwoObjectsAreEqual(obj1[key], obj2[key]))
    : obj1 === obj2;
};

export function getWindowDimensions(): { width: number; height: number } {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export const removeAccentsOrDiacriticsInString = (str: string, form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD' = 'NFD'): string =>
  typeof str === 'string' ? str.normalize(form).replace(/[\u0300-\u036f]/g, '') : str;

export const normalizeValue = (value: string | number): string =>
  typeof value === 'string' ? removeAccentsOrDiacriticsInString(value.trim().toLowerCase()) : value.toString();

export const filterData = (query: string, data: any[], fieldsToMatch: string[] = []): any[] => {
  if (!fieldsToMatch || !fieldsToMatch.length) return data;

  const queryTrim = normalizeValue(query);

  return queryTrim
    ? data?.filter(obj => {
        let match = false;

        fieldsToMatch?.forEach(f => {
          if (!obj[f]) return;
          const value = obj[f];

          if (normalizeValue(value).includes(queryTrim)) match = true;
        });

        return match;
      })
    : data;
};

export function capitalizeString(str: string): string {
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

export function booleanPropSort(property: string, reverse: boolean = false): (a: any, b: any) => number {
  return (a: any, b: any) => (a[property] === b[property] ? 0 : a[property] ? (reverse ? 1 : -1) : reverse ? -1 : 1);
}

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
