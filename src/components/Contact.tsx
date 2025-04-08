
import { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-lightBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-highlight mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. 
              Drop me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-highlight/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:sahilkhan@example.com" className="text-navy font-medium hover:text-highlight">
                    sahilkhan@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-highlight/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+1234567890" className="text-navy font-medium hover:text-highlight">
                    +91 12345 67890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-highlight/10 flex items-center justify-center mr-4">
                  <Linkedin className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/sahilkhan3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy font-medium hover:text-highlight"
                  >
                    linkedin.com/in/sahilkhan3
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-highlight/10 flex items-center justify-center mr-4">
                  <Github className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a 
                    href="https://github.com/sahilkhan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy font-medium hover:text-highlight"
                  >
                    github.com/sahilkhan
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      className="contact-input" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    className="contact-input" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" 
                    rows={5} 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center space-x-2 btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
