export const downloadCSV = (data, filename = "jobster-data.csv") => {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]).join(",");
  const csvRows = data.map((row) => {
    return Object.values(row)
      .map((value) => {
        const stringValue = String(value);
        if (stringValue.includes(",")) {
          return `"${stringValue}"`;
        }
        return stringValue;
      })
      .join(",");
  });

  const csvString = [headers, ...csvRows].join("\n");

  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
