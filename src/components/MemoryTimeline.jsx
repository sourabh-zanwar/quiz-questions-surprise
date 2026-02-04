import React, { useMemo, useState } from 'react';
import './MemoryTimeline.css';
import timelineData from '../data/timeline.json';

const formatYear = (dateStr) => new Date(dateStr).getFullYear();

const Lightbox = ({ item, onClose }) => {
  if (!item) return null;
  const isVideo = item.type === 'video';

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
        <div className="lightbox-media">
          {isVideo ? (
            <video controls src={item.mediaUrl} poster={item.poster} />
          ) : (
            <img src={item.mediaUrl} alt={item.title} />
          )}
        </div>
        <div className="lightbox-meta">
          <h3>{item.title}</h3>
          {item.date && <div className="meta-date">{new Date(item.date).toLocaleDateString()}</div>}
          {item.location && <div className="meta-location">{item.location}</div>}
          {item.description && <p className="meta-description">{item.description}</p>}
        </div>
      </div>
    </div>
  );
};

const MemoryTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const items = useMemo(() => {
    // Ensure items are sorted ascending by date
    const list = (timelineData?.items || []).slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    return list;
  }, []);

  const years = useMemo(() => {
    const ys = Array.from(new Set(items.map((i) => formatYear(i.date))));
    return ys.sort((a, b) => a - b);
  }, [items]);

  const visible = useMemo(() => {
    if (selectedYear === 'all') return items;
    return items.filter((i) => formatYear(i.date) === Number(selectedYear));
  }, [items, selectedYear]);

  return (
    <div className="timeline-page">
      <header className="timeline-header">
        <h1 className="script-title">Our Journey</h1>
        <p className="subtitle">A decade of memories — captured in moments</p>
        <div className="filters">
          <button className={`chip ${selectedYear === 'all' ? 'active' : ''}`} onClick={() => setSelectedYear('all')}>All</button>
          {years.map((y) => (
            <button key={y} className={`chip ${selectedYear === String(y) ? 'active' : ''}`} onClick={() => setSelectedYear(String(y))}>{y}</button>
          ))}
        </div>
      </header>

      <div className="timeline">
        <div className="line" aria-hidden="true" />
        {visible.map((item, idx) => (
          <article key={idx} className="entry" onClick={() => setLightboxItem(item)}>
            <div className="dot" aria-hidden="true" />
            <div className="card">
              <div className="card-media">
                {item.type === 'video' ? (
                  <div className="media-thumb">
                    {item.poster ? (
                      <img src={item.poster} alt={item.title} />
                    ) : (
                      <div className="video-placeholder">▶</div>
                    )}
                  </div>
                ) : (
                  <img src={item.mediaUrl} alt={item.title} />
                )}
              </div>
              <div className="card-body">
                <div className="meta">
                  <span className="meta-year">{formatYear(item.date)}</span>
                  {item.location && <span className="meta-divider">•</span>}
                  {item.location && <span className="meta-location">{item.location}</span>}
                </div>
                <h3 className="card-title">{item.title}</h3>
                {item.description && <p className="card-desc">{item.description}</p>}
                {item.tags?.length ? (
                  <div className="tags">
                    {item.tags.map((t, i) => (
                      <span key={i} className="tag">{t}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
};

export default MemoryTimeline;
