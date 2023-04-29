const contacts = [
    {
      name: "Aarav Gupta",
      email: "aarav.gupta@example.com",
      phone: "9123456789"
    },
    {
      name: "Aditi Sharma",
      email: "aditi.sharma@example.com",
      phone: "9223456789"
    },
    {
      name: "Alisha Singh",
      email: "alisha.singh@example.com",
      phone: "9323456789"
    },
    {
      name: "Aravind Patel",
      email: "aravind.patel@example.com",
      phone: "9423456789"
    },
    {
      name: "Divya Mehta",
      email: "divya.mehta@example.com",
      phone: "9523456789"
    },
    {
      name: "Ishaan Khanna",
      email: "ishaan.khanna@example.com",
      phone: "9623456789"
    },
    {
      name: "Kavya Singhania",
      email: "kavya.singhania@example.com",
      phone: "9723456789"
    },
    {
      name: "Manish Nair",
      email: "manish.nair@example.com",
      phone: "9823456789"
    },
    {
      name: "Neha Gupta",
      email: "neha.gupta@example.com",
      phone: "9923456789"
    },
    {
      name: "Pranav Sharma",
      email: "pranav.sharma@example.com",
      phone: "9023456789"
    },
    {
      name: "Rahul Jain",
      email: "rahul.jain@example.com",
      phone: "9123456780"
    },
    {
      name: "Riya Verma",
      email: "riya.verma@example.com",
      phone: "9123456790"
    },
    {
      name: "Rohit Patel",
      email: "rohit.patel@example.com",
      phone: "9123456809"
    },
    {
      name: "Sahil Sharma",
      email: "sahil.sharma@example.com",
      phone: "9123456908"
    },
    {
      name: "Sakshi Singh",
      email: "sakshi.singh@example.com",
      phone: "9123457089"
    },
    {
      name: "Siddharth Rao",
      email: "siddharth.rao@example.com",
      phone: "9123457890"
    },
    {
      name: "Sneha Nair",
      email: "sneha.nair@example.com",
      phone: "9123458907"
    },
    {
      name: "Tanvi Gupta",
      email: "tanvi.gupta@example.com",
      phone: "9123467890"
    },
    {
      name: "Vikram Mehta",
      email: "vikram.mehta@example.com",
      phone: "9123567890"
    },
    {
      name: "Yash Sharma",
      email: "yash.sharma@example.com",
      phone: "9124567890"
    }
  ]
describe('Simple Contact List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Visit your React app's root path
  });

  it('should render all contact cards', () => {
    cy.get('.contact-card').should('have.length', 20);

    cy.get('.contact-card').each(($card, index, $cards) => {
      const contact = $cards[index];
      const name = contact.querySelector('h2').textContent;
      const email = contact.querySelector('.email').textContent;
      const phone = contact.querySelector('.phone').textContent;

      expect(name).to.equal(`${contacts[index].name}`);
      expect(email).to.equal(`Email: ${contacts[index].email}`);
      expect(phone).to.equal(`Phone: ${contacts[index].phone}`);
    });
  });
});
