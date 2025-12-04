import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chapter 1: Introduction to Physical AI',
      items: [
        'chapter-01/index',
        'chapter-01/what-is-physical-ai',
        'chapter-01/humanoid-robotics-overview',
        'chapter-01/why-learn-physical-ai',
        'chapter-01/course-objectives',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: AI Foundations',
      items: [
        'chapter-02/index',
        'chapter-02/machine-learning-basics',
        'chapter-02/neural-networks',
        'chapter-02/training-models',
        'chapter-02/ai-for-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Hardware Fundamentals',
      items: [
        'chapter-03/index',
        'chapter-03/actuators-sensors',
        'chapter-03/microcontrollers',
        'chapter-03/power-systems',
        'chapter-03/mechanical-design',
      ],
    },
  ],
};

export default sidebars;
