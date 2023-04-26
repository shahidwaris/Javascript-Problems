import 'cypress-file-upload';
describe('Image Processing API', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html'); // assuming the code is hosted on localhost:3000
  });

  it('uploads a file using the upload() method', () => {
    const fileContent = 'data:text/plain;base64,' + btoa('Hello, World!');
    const fileName = 'test.txt';
    const mimeType = 'text/plain';

    cy.get('input[type=file]').then(subject => {
    const el = subject[0];
    const testFile = new File([fileContent], 'test-image.jpg', { type: mimeType });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(testFile);
    el.files = dataTransfer.files;

    cy.wrap(subject).trigger('change', { force: true });
    });

  
  })})
