import React, { useEffect, useState } from 'react';

const ArticleListPreview = () => {
  // Sample data for the preview
  const featuredArticle = {
    category: "Technology",
    title: "The Future of Electric Trucks: A Comprehensive Overview of Voltrux's Revolutionary Features",
    excerpt: "Explore how Voltrux is revolutionizing the electric truck industry with groundbreaking technology and innovative design solutions.",
    author: "John Smith",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    image: "https://placehold.co/800x400/F2F2F2/666?text=Featured+Article",
    path: "#"
  };

  const categories = [
    { name: "All", slug: "all" },
    { name: "Technology", slug: "technology" },
    { name: "Design", slug: "design" },
    { name: "Engineering", slug: "engineering" },
    { name: "News", slug: "news" },
    { name: "Sustainability", slug: "sustainability" }
  ];

  const articles = [
    {
      category: "Design",
      title: "Top Design Trends for 2026 Trucks",
      excerpt: "Discover the cutting-edge design elements that will define the next generation of commercial vehicles.",
      author: "John Smith",
      readTime: "5 min read",
      image: "https://placehold.co/400x300/F2F2F2/666?text=Article+1",
      categorySlug: "design",
      path: "#"
    },
    {
      category: "Engineering",
      title: "Innovating Truck Safety",
      excerpt: "How our engineering team is developing next-gen safety features for commercial vehicles.",
      author: "John Smith",
      readTime: "6 min read",
      image: "https://placehold.co/400x300/F2F2F2/666?text=Article+2",
      categorySlug: "engineering",
      path: "#"
    },
    {
      category: "News",
      title: "Latest News from Voltrux HQ",
      excerpt: "Updates on our latest product launches and company developments.",
      author: "John Smith",
      readTime: "3 min read",
      image: "https://placehold.co/400x300/F2F2F2/666?text=Article+3",
      categorySlug: "news",
      path: "#"
    },
    {
      category: "Technology",
      title: "Battery Tech Updates",
      excerpt: "The latest advancements in battery technology for extended range and efficiency.",
      author: "John Smith",
      readTime: "7 min read",
      image: "https://placehold.co/400x300/F2F2F2/666?text=Article+4",
      categorySlug: "technology",
      path: "#"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.categorySlug === activeCategory);

  // Simulate the JavaScript functionality from the original component
  useEffect(() => {
    const handleFilterClick = (index, slug) => {
      setActiveButtonIndex(index);
      setActiveCategory(slug);
    };

    // Set first button as active by default
    if (activeButtonIndex === 0) {
      setActiveCategory(categories[0].slug);
    }
  }, [activeButtonIndex, categories]);

  return (
    <section className="article-list" data-component="article-list" style={{
      padding: '40px 0',
      backgroundColor: '#F2F2F2', /* neutral-color */
      maxWidth: '100%'
    }}>
      <div className="container" style={{
        maxWidth: '1200px', /* max-width */
        margin: '0 auto',
        padding: '0 20px' /* spacing-lg */
      }}>
        {/* Featured Article */}
        <div className="featured-article-card" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px', /* spacing-lg */
          marginBottom: '60px', /* spacing-xxl */
          backgroundColor: '#fff',
          border: '1px solid #E0E0E0', /* border-color */
          borderRadius: '15px', /* spacing-md */
          overflow: 'hidden',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' /* shadow-medium */
        }}>
          <div className="featured-article-image" style={{
            height: '300px',
            overflow: 'hidden'
          }}>
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/800x600/F2F2F2/666?text=Featured+Image';
              }}
            />
          </div>

          <div className="featured-article-content" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span className="article-category" style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: 'rgba(228, 0, 43, 0.1)',
              border: '1px solid #E4002B', /* accent-color */
              borderRadius: '4px',
              color: '#E4002B', /* accent-color */
              fontWeight: '600',
              fontSize: '14px', /* font-size-sm */
              marginBottom: '15px', /* spacing-md */
              textTransform: 'uppercase'
            }}>
              {featuredArticle.category}
            </span>

            <h2 style={{
              fontSize: '32px', /* font-size-xxl */
              fontWeight: '700',
              marginBottom: '15px', /* spacing-md */
              color: '#1A1A1A' /* primary-color */
            }}>
              {featuredArticle.title}
            </h2>

            <p className="excerpt" style={{
              color: '#666', /* text-muted */
              fontSize: '16px', /* font-size-md */
              marginBottom: '20px' /* spacing-lg */
            }}>
              {featuredArticle.excerpt}
            </p>

            <div className="article-meta" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px', /* spacing-sm */
              fontSize: '14px', /* font-size-sm */
              color: '#666', /* text-muted */
              marginBottom: '20px' /* spacing-lg */
            }}>
              <div className="meta-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>{featuredArticle.author}</span>
              </div>
              <div className="meta-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                <span>{featuredArticle.date}</span>
              </div>
              <div>{featuredArticle.readTime}</div>
            </div>

            <a href={featuredArticle.path} className="cta-button" style={{
              backgroundColor: '#E4002B', /* cta-bg */
              color: 'white',
              padding: '12px 24px',
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              width: 'fit-content'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B60022'; /* cta-hover */
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'; /* shadow-light */
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E4002B'; /* cta-bg */
              e.currentTarget.style.boxShadow = 'none';
            }}>
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filter" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px', /* spacing-sm */
          marginBottom: '40px',
          borderBottom: '2px solid #E0E0E0', /* border-color */
          paddingBottom: '15px' /* spacing-md */
        }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveButtonIndex(index);
                setActiveCategory(category.slug);
              }}
              data-filter={category.slug}
              className={activeButtonIndex === index ? 'active' : ''}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: activeButtonIndex === index
                  ? '1px solid #E4002B' /* accent-color */
                  : '1px solid #E0E0E0', /* border-color */
                color: activeButtonIndex === index ? '#fff' : '#1A1A1A', /* text-color */
                backgroundColor: activeButtonIndex === index
                  ? '#E4002B' /* accent-color */
                  : 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontWeight: '600',
                background: activeButtonIndex === index ? '#E4002B' /* accent-color */ : 'white',
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="articles-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px' /* spacing-lg */
        }}>
          {filteredArticles.map((article, index) => (
            <a
              key={index}
              href={article.path}
              className="article-card"
              data-category={article.categorySlug}
              style={{
                textDecoration: 'none',
                color: '#1A1A1A', /* text-color */
                display: 'block',
                border: '1px solid #E0E0E0', /* border-color */
                borderRadius: '10px', /* spacing-sm */
                overflow: 'hidden',
                backgroundColor: 'white',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease, opacity 0.4s ease, transform 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E4002B'; /* accent-color */
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(228, 0, 43, 0.2)'; /* shadow-medium */
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E0E0E0'; /* border-color */
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)'; /* shadow-medium */
              }}
            >
              <div className="article-card-image" style={{
                height: '192px',
                overflow: 'hidden',
                backgroundColor: '#F2F2F2' /* neutral-color */
              }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x300/F2F2F2/666?text=Article+Image';
                  }}
                />
              </div>

              <div className="article-card-content" style={{
                padding: '15px' /* spacing-md */
              }}>
                <span className="category-label" style={{
                  fontSize: '14px', /* font-size-sm */
                  color: '#E4002B', /* accent-color */
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  marginBottom: '10px', /* spacing-sm */
                  display: 'block'
                }}>
                  {article.category}
                </span>

                <h3 style={{
                  fontSize: '18px', /* font-size-lg */
                  fontWeight: '700',
                  marginBottom: '10px', /* spacing-sm */
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  transition: 'color 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E4002B'; /* accent-color */
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#1A1A1A'; /* text-color */
                }}>
                  {article.title}
                </h3>

                <p className="card-excerpt" style={{
                  color: '#666', /* text-muted */
                  fontSize: '14px', /* font-size-sm */
                  marginBottom: '15px', /* spacing-md */
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2
                }}>
                  {article.excerpt}
                </p>

                <div className="card-meta" style={{
                  display: 'flex',
                  gap: '15px', /* spacing-md */
                  fontSize: '14px', /* font-size-sm */
                  color: '#666' /* text-muted */
                }}>
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleListPreview;