"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, Mail, Linkedin, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const contactInfo = [
    { 
      icon: <Phone className="w-5 h-5 text-purple" />, 
      text: '06 86 93 05 22',
      href: 'tel:0686930522'
    },
    { 
      icon: <Mail className="w-5 h-5 text-purple" />, 
      text: 'toma11chang@gmail.com',
      href: 'mailto:toma11chang@gmail.com'
    },
    { 
      icon: <Linkedin className="w-5 h-5 text-purple" />, 
      text: 'Linkedin - CHANG Toma',
      href: 'https://linkedin.com/in/chang-toma'
    },
    { 
      icon: <MapPin className="w-5 h-5 text-purple" />, 
      text: 'Île-de-France, 78180',
      href: 'https://maps.google.com/?q=78180,France'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
    
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact
          </h2>
          <div className="ml-4 flex-grow h-[1px] bg-lightNavy"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Discutons de votre projet</h3>
            <p className="text-lightSlate mb-8">
              Je suis actuellement disponible pour des missions freelance. N'hésitez pas à me contacter !
            </p>
            
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={info.href}
                    className="flex items-center group"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="mr-3 glassmorphism p-3 rounded-full">
                      {info.icon}
                    </div>
                    <span className="text-lightSlate group-hover:text-purple transition-colors duration-300">
                      {info.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Bouton me contacter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="px-8 py-6 text-lg font-semibold bg-purple hover:bg-purple/80 
                          shadow-[0_0_15px_rgba(124,58,237,0.5)] 
                          hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] 
                          transition-all duration-300"
              >
                <a 
                  href="mailto:toma11chang@gmail.com" 
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Me contacter</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
