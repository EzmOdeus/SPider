import { Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill } from '@/constants'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import SkillDataProvider from './SkillDataProvider'

function Skills() {
    return (
        <AnimatePresence>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="skills"
                className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
                style={{ transform: "scale(0.9" }}
            >
                <div className='w-full h-auto flex flex-col items-center justify-center'>

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
                    >
                        Making apps with modern technologies
                    </motion.div>
                    <motion.div
                        variants={slideInFromRight(0.5)}
                        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
                    >
                        Never miss a task
                    </motion.div>
                </div>

                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Skill_data.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}

                            index={index}
                        />
                    ))}
                </div>

                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Frontend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Backend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Full_stack.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Other_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>

                <div className="w-full h-full absolute">
                    <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                        <video
                            className="w-full h-auto"
                            preload="false"
                            playsInline
                            loop
                            muted
                            autoPlay
                            src="/cards-video.webm"
                        />
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    )
}

export default Skills