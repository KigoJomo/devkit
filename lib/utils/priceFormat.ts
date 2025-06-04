export const formatPrice = (currency: string, price: string): string => {
  try {
    const numericPrice = parseFloat(price);

    if (isNaN(numericPrice)) {
      console.error(`Invalid price value: ${price}`);
      return price;
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericPrice);
  } catch (error) {
    console.error(`Error formatting price: ${price} ${currency}`, error);
    return price;
  }
};

export const priceFormatterTypescript = `
\`\`\`typescript
function formatPrice(currency: string, price: string): string {
  try {
    const numericPrice = parseFloat(price);

    if (isNaN(numericPrice)) {
      console.error(\`Invalid price value: \${price}\`);
      return price;
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericPrice);
  } catch (error) {
    console.error(\`Error formatting price: \${price} \${currency}\`, error);
    return price;
  }
}

// Example usage
console.log(formatPrice('USD', '1234.56')); // $1,234.56
\`\`\`
`;

export const priceFormatterJavascript = `
\`\`\`javascript
function formatPrice(currency, price) {
  try {
    const numericPrice = parseFloat(price);

    if (isNaN(numericPrice)) {
      console.error(\`Invalid price value: \${price}\`);
      return price;
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericPrice);
  } catch (error) {
    console.error(\`Error formatting price: \${price} \${currency}\`, error);
    return price;
  }
}
// Example usage
console.log(formatPrice('USD', '1234.56')); // $1,234.56
\`\`\`
`;

export const priceFormatterPython = `
\`\`\`python
def format_price(currency, price):
    try:
        numeric_price = float(price)

        if not numeric_price:
            print(f"Invalid price value: {price}")
            return price

        return f"{numeric_price:,.2f} {currency}"
    except Exception as e:
        print(f"Error formatting price: {price} {currency}", e)
        return price

# Example usage
print(format_price('USD', '1234.56'))  # 1,234.56 USD
\`\`\`
`;

export const priceFormatterJava = `
\`\`\`java
public static String formatPrice(String currency, String price) {
  try {
    double numericPrice = Double.parseDouble(price);
    
    NumberFormat formatter = NumberFormat.getCurrencyInstance(Locale.US);
    Currency curr = Currency.getInstance(currency);
    formatter.setCurrency(curr);
    formatter.setMinimumFractionDigits(2);
    formatter.setMaximumFractionDigits(2);
    
    return formatter.format(numericPrice);
  } catch (NumberFormatException e) {
    System.err.println("Invalid price value: " + price);
    return price;
  } catch (Exception e) {
    System.err.println("Error formatting price: " + price + " " + currency + " " + e.getMessage());
    return price;
  }
}

// Example usage
System.out.println(formatPrice("USD", "1234.56")); // $1,234.56
\`\`\`
`;