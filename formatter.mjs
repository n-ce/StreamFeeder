export function xmlFormat(xml) {

  let formatted = '';
  let indent = '';

  xml.split('').forEach((char) => {
    switch (char) {
      case '<':
        formatted += char + '\n' + indent;
        indent += '  ';
        break;
      case '>':
        indent = indent.substring(0, indent.length - 2);
        formatted += '\n' + indent + char;
        break;
      case '\r':
      case '\n':
        break;
      default:
        formatted += char;
    }
  });
  return formatted;
}

