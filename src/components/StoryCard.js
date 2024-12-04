'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaClock, FaComment, FaStar } from 'react-icons/fa';

const StoryCard = ({ story, isHovered }) => {
  return (
    <motion.div
      className="story-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col justify-between relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
      style={{
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.2), 0 0 30px rgba(0, 255, 255, 0.1)',
      }}
    >
      <motion.a 
        href={story.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-4 sm:p-6 h-full"
        initial={false}
        animate={{
          filter: isHovered ? 'blur(3px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gray-300"
          initial={false}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {story.title}
        </motion.h2>
        <div className="text-gray-400 text-sm grid grid-cols-2 gap-x-4 gap-y-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-cyan-600" />
            <span className="ml-1">{story.points}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUser />
            <span className="ml-1">{story.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock />
            <span className="ml-1">{story.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaComment />
            <span className="ml-1">{story.comments}</span>
          </div>
        </div>
      </motion.a>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href={story.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)',
            textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
          }}
        >
          Read News
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default StoryCard;