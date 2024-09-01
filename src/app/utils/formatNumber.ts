export const formatNumber = (value: number | undefined) => {
    if (value === undefined) return "N/A";
    return value.toLocaleString('en-US', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).replace(/,/g, ',');
  };