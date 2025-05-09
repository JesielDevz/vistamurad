import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-700/50 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg md:text-xl font-bold text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? <ChevronUp className="text-pink-400" /> : <ChevronDown className="text-pink-400" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-pink-100">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is VISTAMURAD?',
      answer: 'VISTAMURAD is a community-driven, decentralized cryptocurrency built on the Ethereum blockchain. It combines the fun and viral nature of meme coins with innovative tokenomics and utility features designed to create lasting value for our community.',
    },
    {
  question: 'How can I buy VISTAMURAD?',
  answer: 'You can buy VISTAMURAD by setting up a crypto wallet like MetaMask, purchasing ETH from an exchange, and then swapping ETH for VISTAMURAD on Etherfun, which is available through the decentralized exchange Ethervista. For detailed instructions, check out our "How to Buy" section.',
    },
    {
      question: 'What makes VISTAMURAD different from other meme coins?',
      answer: 'VISTAMURAD stands out due to its strong community focus, fair launch, zero taxes, and commitment to transparency. We also have a clear roadmap for development and utility implementation that goes beyond typical meme coins.',
    },
    {
      question: 'Is VISTAMURAD safe to invest in?',
      answer: 'VISTAMURAD has implemented multiple security measures, including locked liquidity, renounced contract ownership, and third-party audits. However, as with all cryptocurrencies, there are inherent risks and we recommend you do your own research before investing.',
    },
    {
      question: 'What are the tokenomics of VISTAMURAD?',
      answer: 'VISTAMURAD has a total supply of 1 billion tokens. 50% is allocated to the community, 30% to liquidity pools, 15% to the development fund, and 5% to the team with vesting periods. There are no buy or sell taxes.',
    },
    {
      question: 'How can I participate in the VISTAMURAD community?',
      answer: 'You can join our active communities on Twitter, Telegram, and Discord. We encourage everyone to participate in discussions, share memes, and contribute ideas for the future development of VISTAMURAD.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-800 to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            Find answers to the most common questions about VISTAMURAD and join our community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-purple-800/30 rounded-3xl backdrop-blur-sm p-6 md:p-8 border border-purple-600/30">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-pink-200 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/30"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;