const formatText = (text, textLength = 0) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');

  // Retrieve the desired elements and format them
  const boldElements = doc.querySelectorAll('b');
  boldElements.forEach((element) => {
    element.style.fontWeight = 'bold';
  });

  const linkElements = doc.querySelectorAll('a');
  linkElements.forEach((element) => {
    element.style.color = 'blue';
  });

  // Trim the text to a specific length
  let trimmedText = doc.documentElement.textContent.trim();
  const maxLength = textLength;
  if (trimmedText.length > maxLength) {
    trimmedText = trimmedText.substring(0, maxLength) + '...';
  }

  return <div className="text-center" dangerouslySetInnerHTML={{ __html: trimmedText }} />;
};

export default formatText;