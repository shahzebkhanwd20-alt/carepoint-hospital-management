export function toCsv(rows) {
  if (!rows?.length) return '';
  const keys = Object.keys(rows[0]);
  const quote = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
  return [keys.map(quote).join(','), ...rows.map(row => keys.map(key => quote(row[key])).join(','))].join('\n');
}

export function paginate(items, page, pageSize) {
  const safePage = Math.max(1, Number(page) || 1);
  const safeSize = Math.max(1, Number(pageSize) || 1);
  return items.slice((safePage - 1) * safeSize, safePage * safeSize);
}
