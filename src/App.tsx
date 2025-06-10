import { useState } from 'react';
import './App.css';
import {
  LayoutGroup,
  motion,
  AnimatePresence,
  type Transition,
} from 'motion/react';
import { type Tag, items } from './utils';

export const App = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [layoutDuration, setLayoutDuration] = useState<number>(5);

  const layoutTransition: Transition = {
    duration: layoutDuration / 10,
    ease: [0.27, 0.99, 0.25, 0.99],
  };

  const tags: Tag[] = Object.entries(
    items
      .flatMap((item) => item.tags)
      .reduce<Record<string, number>>((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {})
  ).map(([tagName, count]) => ({ tagName, count }));

  const handleTagClick = (tagName: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setSelectedTags((prevSelected) =>
      prevSelected.includes(tagName)
        ? prevSelected.filter((tag) => tag !== tagName)
        : [...prevSelected, tagName]
    );
  };

  const filteredItems = (
    selectedTags.length === 0
      ? items
      : items.filter((item) =>
          selectedTags.some((tag) => item.tags.includes(tag))
        )
  ).sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="container">
      <div className="tags-container">
        {tags.map((tag) => (
          <button
            key={tag.tagName}
            className={selectedTags.includes(tag.tagName) ? 'active' : ''}
            onClick={() => handleTagClick(tag.tagName)}
          >
            #{tag.tagName} ({tag.count})
          </button>
        ))}
      </div>

      <div className="quick-controls-container">
        <button
          disabled={selectedTags.length === 0}
          onClick={() => setSelectedTags([])}
        >
          Reset tags
        </button>

        <div className="transition-duration-container">
          <label>Transition duration: {layoutDuration / 10}s</label>
          <input
            type="range"
            value={layoutDuration}
            min="5"
            max="50"
            onChange={(e) => {
              setLayoutDuration(parseInt(e.target.value));
            }}
          />
        </div>
      </div>

      <LayoutGroup>
        <motion.div className="items-container" layout>
          <AnimatePresence propagate>
            {filteredItems.map((item) => (
              <motion.div
                layout
                transition={layoutTransition}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item.title}
                className="item"
              >
                <motion.strong layout transition={layoutTransition}>
                  {item.title}
                </motion.strong>
                <motion.p layout transition={layoutTransition}>
                  {item.description}
                </motion.p>
                <motion.small layout transition={layoutTransition}>
                  {item.tags.map((tag) => `#${tag}`).join(', ')}
                </motion.small>
                <motion.small layout transition={layoutTransition}>
                  {item.date.toLocaleDateString()}
                </motion.small>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          layout
          transition={layoutTransition}
          layoutId="content-underneith"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </motion.p>
      </LayoutGroup>
    </div>
  );
};
