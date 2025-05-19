import type { ANSArticle, ViewAPIResponse, IViewAPI, ANSNavigation, NavigationAPIResponse, ANSCollection, CollectionAPIResponse } from '../types/ans';

// Mock data for testing
const mockArticles: ANSArticle[] = [
  // Technology articles
  {
    _id: '1',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T14:00:00Z',
    last_updated_date: '2025-05-16T14:00:00Z',
    headlines: {
      basic: 'Breaking News: Major Tech Breakthrough',
      seo: 'Revolutionary Tech Discovery Changes Industry Landscape',
    },
    description: {
      basic: 'Scientists announce groundbreaking technology that could revolutionize the industry.',
    },
    promo_items: {
      basic: {
        _id: 'image1',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/2196f3/ffffff/png?text=Tech+Breakthrough',
        caption: 'Revolutionary new technology unveiled',
        width: 800,
        height: 600
      }
    },
    content_elements: [
      {
        type: 'text',
        text: 'In a stunning development, researchers have unveiled a new technology that promises to transform...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Technology', slug: 'technology' },
        { text: 'Innovation', slug: 'innovation' },
      ],
      sections: [
        { name: 'Technology', path: '/technology' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author1',
          type: 'author',
          name: 'Jane Smith',
          bio: 'Technology Reporter',
        },
      ],
    },
    canonical_url: '/technology/2025/05/16/tech-breakthrough',
    website_url: '/technology/2025/05/16/tech-breakthrough',
  },
  {
    _id: '2',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T13:45:00Z',
    promo_items: {
      basic: {
        _id: 'image2',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/4caf50/ffffff/png?text=Business+News',
        caption: 'Business district skyline',
        width: 800,
        height: 600
      }
    },
    last_updated_date: '2025-05-16T13:45:00Z',
    headlines: {
      basic: 'AI Assistants Become Smarter Than Ever',
    },
    description: {
      basic: 'New generation of AI tools show unprecedented capabilities in problem-solving and creativity.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'The latest generation of artificial intelligence assistants has demonstrated remarkable abilities...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Technology', slug: 'technology' },
        { text: 'AI', slug: 'artificial-intelligence' },
      ],
      sections: [
        { name: 'Technology', path: '/technology' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author5',
          type: 'author',
          name: 'Alex Chen',
          bio: 'AI Specialist',
        },
      ],
    },
    canonical_url: '/technology/2025/05/16/ai-assistants-smarter',
    website_url: '/technology/2025/05/16/ai-assistants-smarter',
  },
  // Business articles
  {
    _id: '3',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T13:30:00Z',
    promo_items: {
      basic: {
        _id: 'image3',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/2196f3/ffffff/png?text=Tech+Innovation',
        caption: 'Innovative tech solutions',
        width: 800,
        height: 600
      }
    },
    last_updated_date: '2025-05-16T13:30:00Z',
    headlines: {
      basic: 'Global Markets Hit Record High',
    },
    description: {
      basic: 'Stock markets worldwide reach unprecedented levels as economic confidence soars.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'Global markets experienced a surge today as investors responded to positive economic indicators...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Business', slug: 'business' },
        { text: 'Markets', slug: 'markets' },
      ],
      sections: [
        { name: 'Business', path: '/business' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author2',
          type: 'author',
          name: 'John Doe',
          bio: 'Financial Analyst',
        },
      ],
    },
    canonical_url: '/business/2025/05/16/markets-record-high',
    website_url: '/business/2025/05/16/markets-record-high',
  },
  {
    _id: '4',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T13:15:00Z',
    promo_items: {
      basic: {
        _id: 'image4',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/4caf50/ffffff/png?text=Market+Analysis',
        caption: 'Financial market trends',
        width: 800,
        height: 600
      }
    },
    last_updated_date: '2025-05-16T13:15:00Z',
    headlines: {
      basic: 'Startup Secures $500M in Series C Funding',
    },
    description: {
      basic: 'Tech unicorn attracts major investment to expand global operations and product development.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'In one of the largest funding rounds this year, the rapidly growing startup announced...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Business', slug: 'business' },
        { text: 'Startups', slug: 'startups' },
      ],
      sections: [
        { name: 'Business', path: '/business' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author6',
          type: 'author',
          name: 'Emma Rodriguez',
          bio: 'Business Reporter',
        },
      ],
    },
    canonical_url: '/business/2025/05/16/startup-funding',
    website_url: '/business/2025/05/16/startup-funding',
  },

  // Politics articles
  {
    _id: '5',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T12:45:00Z',
    promo_items: {
      basic: {
        _id: 'image5',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/9c27b0/ffffff/png?text=Political+News',
        caption: 'Political developments',
        width: 800,
        height: 600
      }
    },
    last_updated_date: '2025-05-16T12:45:00Z',
    headlines: {
      basic: 'Historic Climate Bill Passes Senate',
    },
    description: {
      basic: 'Landmark legislation sets ambitious targets for reducing carbon emissions by 2030.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'In a historic vote that marks a turning point in climate policy, the Senate has passed sweeping legislation that aims to dramatically reduce carbon emissions by 2030.',
      },
      {
        type: 'header',
        text: 'Key Points of the Bill',
        level: 2
      },
      {
        type: 'list',
        list_type: 'unordered',
        items: [
          'Mandates 50% reduction in carbon emissions by 2030',
          'Establishes $100 billion clean energy fund',
          'Creates incentives for electric vehicle adoption',
          'Supports renewable energy infrastructure'
        ]
      },
      {
        type: 'text',
        text: 'The bill, which passed with bipartisan support, represents the most significant climate action in U.S. history. Environmental groups have praised the legislation as a crucial step toward addressing the climate crisis.',
      },
      {
        type: 'image',
        referent: {
          id: 'senate_vote_image',
          type: 'image',
          referent_properties: {
            url: 'https://placehold.co/800x600/4caf50/ffffff/png?text=Senate+Vote',
            caption: 'Senators cast their votes on the landmark climate bill',
            alt_text: 'View of the Senate chamber during the climate bill vote',
            width: 800,
            height: 600
          }
        }
      },
      {
        type: 'text',
        text: '\'This is a watershed moment for our nation\'s climate policy,\' said Senate Majority Leader in a press conference following the vote. \'We are finally taking decisive action to protect our planet for future generations.\'',
      },
      {
        type: 'quote',
        text: 'The time for incremental measures has passed. This bill represents the bold action we need to address the climate crisis.',
        citation: 'Dr. Emily Carter',
        role: 'Climate Science Director, Environmental Policy Institute'
      },
      {
        type: 'header',
        text: 'Implementation Timeline',
        level: 2
      },
      {
        type: 'table',
        header: ['Phase', 'Timeline', 'Key Actions'],
        rows: [
          ['Initial', '2025-2026', 'Establish regulatory framework'],
          ['Deployment', '2026-2028', 'Roll out major initiatives'],
          ['Full Implementation', '2028-2030', 'Achieve emission targets']
        ]
      },
      {
        type: 'text',
        text: 'The bill now moves to the House of Representatives, where it is expected to pass with similar bipartisan support. The President has indicated he will sign the legislation immediately upon passage.',
      }
    ],
    taxonomy: {
      tags: [
        { text: 'Politics', slug: 'politics' },
        { text: 'Climate Change', slug: 'climate-change' },
      ],
      sections: [
        { name: 'Politics', path: '/politics' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author3',
          type: 'author',
          name: 'Sarah Johnson',
          bio: 'Political Correspondent',
        },
      ],
    },
    canonical_url: '/politics/2025/05/16/climate-bill-passes',
    website_url: '/politics/2025/05/16/climate-bill-passes',
  },
  {
    _id: '6',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T12:30:00Z',
    promo_items: {
      basic: {
        _id: 'image6',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/ff9800/ffffff/png?text=Sports+Update',
        caption: 'Sports highlights',
        width: 800,
        height: 600
      }
    },
    last_updated_date: '2025-05-16T12:30:00Z',
    headlines: {
      basic: 'New Trade Agreement Signed Between Major Economies',
    },
    description: {
      basic: 'Historic deal promises to reshape global commerce and strengthen international relations.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'Leaders from several of the world\'s largest economies gathered today to sign what analysts are calling...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Politics', slug: 'politics' },
        { text: 'Trade', slug: 'trade' },
      ],
      sections: [
        { name: 'Politics', path: '/politics' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author7',
          type: 'author',
          name: 'David Wilson',
          bio: 'International Affairs Analyst',
        },
      ],
    },
    canonical_url: '/politics/2025/05/16/trade-agreement',
    website_url: '/politics/2025/05/16/trade-agreement',
  },

  // Sports articles
  {
    _id: '7',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T12:30:00Z',
    last_updated_date: '2025-05-16T12:30:00Z',
    promo_items: {
      basic: {
        _id: 'image7',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/9c27b0/ffffff/png?text=Political+Update',
        caption: 'Political discussions',
        width: 800,
        height: 600
      }
    },
    headlines: {
      basic: 'Underdog Team Wins Championship in Stunning Upset',
    },
    description: {
      basic: 'Local team defies odds to clinch their first national title in dramatic fashion.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'In what will go down as one of the greatest upsets in sports history...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Sports', slug: 'sports' },
        { text: 'Championship', slug: 'championship' },
      ],
      sections: [
        { name: 'Sports', path: '/sports' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author4',
          type: 'author',
          name: 'Mike Thompson',
          bio: 'Sports Reporter',
        },
      ],
    },
    canonical_url: '/sports/2025/05/16/championship-upset',
    website_url: '/sports/2025/05/16/championship-upset',
  },
  {
    _id: '8',
    type: 'story',
    version: '1.0',
    created_date: '2025-05-16T12:15:00Z',
    last_updated_date: '2025-05-16T12:15:00Z',
    promo_items: {
      basic: {
        _id: 'image8',
        type: 'image',
        version: '1.0',
        url: 'https://placehold.co/800x600/ff9800/ffffff/png?text=Sports+Championship',
        caption: 'Championship highlights',
        width: 800,
        height: 600
      }
    },
    headlines: {
      basic: 'Star Athlete Signs Record-Breaking Contract',
    },
    description: {
      basic: 'Unprecedented deal makes history as the largest in the sport\'s history.',
    },
    content_elements: [
      {
        type: 'text',
        text: 'The sports world was stunned today as the announcement came that the league\'s top performer had signed...',
      },
    ],
    taxonomy: {
      tags: [
        { text: 'Sports', slug: 'sports' },
        { text: 'Contracts', slug: 'contracts' },
      ],
      sections: [
        { name: 'Sports', path: '/sports' },
      ],
    },
    credits: {
      by: [
        {
          _id: 'author8',
          type: 'author',
          name: 'Jessica Lee',
          bio: 'Sports Business Analyst',
        },
      ],
    },
    canonical_url: '/sports/2025/05/16/record-contract',
    website_url: '/sports/2025/05/16/record-contract',
  },
];

// Mock collection data based on Arc XP View API schema
const mockCollections: ANSCollection[] = [
  {
    _id: '0',
    name: 'Top Stories',
    description: 'Breaking news and top stories from around the world',
    content_elements: [
      mockArticles[0], // Tech breakthrough
      mockArticles[2], // Global markets
      mockArticles[4], // Climate bill
      mockArticles[6]  // Championship upset
    ]
  },
  {
    _id: '1',
    name: 'Technology',
    description: 'Latest technology news and innovations',
    content_elements: [
      mockArticles[0], // Tech breakthrough
      mockArticles[1], // AI assistants
      {
        _id: '9',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T11:30:00Z',
        last_updated_date: '2025-05-16T11:30:00Z',
        promo_items: {
          basic: {
            _id: 'image9',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/2196f3/ffffff/png?text=Quantum+Computing',
            caption: 'Quantum computing breakthrough',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Quantum Computing Reaches New Milestone',
        },
        description: {
          basic: 'Scientists achieve quantum supremacy with new processor design.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'In a groundbreaking development, researchers have demonstrated quantum supremacy...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Technology', slug: 'technology' },
            { text: 'Quantum Computing', slug: 'quantum-computing' },
          ],
          sections: [
            { name: 'Technology', path: '/technology' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author9',
              type: 'author',
              name: 'Robert Chen',
              bio: 'Quantum Computing Specialist',
            },
          ],
        },
        canonical_url: '/technology/2025/05/16/quantum-computing-milestone',
        website_url: '/technology/2025/05/16/quantum-computing-milestone',
      },
      {
        _id: '13',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T10:30:00Z',
        last_updated_date: '2025-05-16T10:30:00Z',
        promo_items: {
          basic: {
            _id: 'image13',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/2196f3/ffffff/png?text=Wearable+Tech',
            caption: 'Next-generation wearable technology',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'New Wearable Tech Monitors Health Metrics with Unprecedented Accuracy',
        },
        description: {
          basic: 'Revolutionary smart device can detect early signs of health issues before symptoms appear.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'A team of biomedical engineers has developed a wearable device that continuously monitors vital health metrics...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Technology', slug: 'technology' },
            { text: 'Wearables', slug: 'wearables' },
            { text: 'Healthcare', slug: 'healthcare' },
          ],
          sections: [
            { name: 'Technology', path: '/technology' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author13',
              type: 'author',
              name: 'Sophia Kim',
              bio: 'Health Technology Reporter',
            },
          ],
        },
        canonical_url: '/technology/2025/05/16/wearable-health-tech',
        website_url: '/technology/2025/05/16/wearable-health-tech',
      },
      {
        _id: '14',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T10:15:00Z',
        last_updated_date: '2025-05-16T10:15:00Z',
        promo_items: {
          basic: {
            _id: 'image14',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/2196f3/ffffff/png?text=AI+Research',
            caption: 'AI research developments',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Electric Vehicle Battery Breakthrough Extends Range by 70%',
        },
        description: {
          basic: 'New solid-state battery technology could revolutionize the electric vehicle industry.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'Researchers have developed a new type of solid-state battery that dramatically increases the range of electric vehicles...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Technology', slug: 'technology' },
            { text: 'Electric Vehicles', slug: 'electric-vehicles' },
            { text: 'Batteries', slug: 'batteries' },
          ],
          sections: [
            { name: 'Technology', path: '/technology' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author14',
              type: 'author',
              name: 'Daniel Park',
              bio: 'Automotive Technology Specialist',
            },
          ],
        },
        canonical_url: '/technology/2025/05/16/ev-battery-breakthrough',
        website_url: '/technology/2025/05/16/ev-battery-breakthrough',
      }
    ]
  },
  {
    _id: '2',
    name: 'Business',
    description: 'Business news, markets, and financial insights',
    content_elements: [
      mockArticles[2], // Global markets
      mockArticles[3], // Startup funding
      {
        _id: '10',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T11:15:00Z',
        last_updated_date: '2025-05-16T11:15:00Z',
        promo_items: {
          basic: {
            _id: 'image10',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/4caf50/ffffff/png?text=Business+Merger',
            caption: 'Corporate merger announcement',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Major Merger Creates New Industry Giant',
        },
        description: {
          basic: 'Two leading corporations announce merger valued at $80 billion.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'In a move that will reshape the industry landscape, two major corporations announced today...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Business', slug: 'business' },
            { text: 'Mergers', slug: 'mergers' },
          ],
          sections: [
            { name: 'Business', path: '/business' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author10',
              type: 'author',
              name: 'Victoria Adams',
              bio: 'Corporate Finance Reporter',
            },
          ],
        },
        canonical_url: '/business/2025/05/16/major-merger',
        website_url: '/business/2025/05/16/major-merger',
      },
      {
        _id: '15',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T10:00:00Z',
        last_updated_date: '2025-05-16T10:00:00Z',
        promo_items: {
          basic: {
            _id: 'image15',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/4caf50/ffffff/png?text=Startup+Success',
            caption: 'Tech startup success story',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Central Bank Announces Surprise Interest Rate Decision',
        },
        description: {
          basic: 'Markets react to unexpected monetary policy shift aimed at controlling inflation.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'In a move that caught financial analysts by surprise, the Central Bank announced today...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Business', slug: 'business' },
            { text: 'Economy', slug: 'economy' },
            { text: 'Interest Rates', slug: 'interest-rates' },
          ],
          sections: [
            { name: 'Business', path: '/business' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author15',
              type: 'author',
              name: 'Thomas Wright',
              bio: 'Economics Correspondent',
            },
          ],
        },
        canonical_url: '/business/2025/05/16/central-bank-interest-rates',
        website_url: '/business/2025/05/16/central-bank-interest-rates',
      },
      {
        _id: '16',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T09:45:00Z',
        last_updated_date: '2025-05-16T09:45:00Z',
        promo_items: {
          basic: {
            _id: 'image16',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/4caf50/ffffff/png?text=Global+Markets',
            caption: 'Global market analysis',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Retail Giant Announces Major Expansion into International Markets',
        },
        description: {
          basic: 'Company plans to open 200 new stores across Asia and Europe over the next three years.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'One of the nation\'s largest retail chains unveiled ambitious plans today for global expansion...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Business', slug: 'business' },
            { text: 'Retail', slug: 'retail' },
            { text: 'Global Markets', slug: 'global-markets' },
          ],
          sections: [
            { name: 'Business', path: '/business' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author16',
              type: 'author',
              name: 'Rebecca Liu',
              bio: 'Retail Industry Analyst',
            },
          ],
        },
        canonical_url: '/business/2025/05/16/retail-international-expansion',
        website_url: '/business/2025/05/16/retail-international-expansion',
      },
    ]
  },
  {
    _id: '3',
    name: 'Politics',
    description: 'Political news and analysis from around the world',
    content_elements: [
      mockArticles[4], // Climate bill
      mockArticles[5], // Trade agreement
      {
        _id: '17',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T09:30:00Z',
        last_updated_date: '2025-05-16T09:30:00Z',
        promo_items: {
          basic: {
            _id: 'image17',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/673ab7/ffffff/png?text=Policy+Reform',
            caption: 'Policy reform debate in congress',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Major Policy Reform Bill Gains Bipartisan Support',
        },
        description: {
          basic: 'A comprehensive policy reform package has gathered unexpected support from both major parties.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'In a rare show of bipartisan cooperation, lawmakers from both sides of the aisle have come together...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Politics', slug: 'politics' },
            { text: 'Policy Reform', slug: 'policy-reform' },
            { text: 'Congress', slug: 'congress' },
          ],
          sections: [
            { name: 'Politics', path: '/politics' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author17',
              type: 'author',
              name: 'Marcus Chen',
              bio: 'Political Correspondent',
            },
          ],
        },
        canonical_url: '/politics/2025/05/16/policy-reform-bill-bipartisan-support',
        website_url: '/politics/2025/05/16/policy-reform-bill-bipartisan-support',
      },
      {
        _id: '11',
        type: 'story',
        version: '1.0',
        created_date: '2025-05-16T11:00:00Z',
        last_updated_date: '2025-05-16T11:00:00Z',
        promo_items: {
          basic: {
            _id: 'image11',
            type: 'image',
            version: '1.0',
            url: 'https://placehold.co/800x600/9c27b0/ffffff/png?text=Policy+Reform',
            caption: 'Policy reform discussion',
            width: 800,
            height: 600
          }
        },
        headlines: {
          basic: 'Election Results Surprise Political Analysts',
        },
        description: {
          basic: 'Unexpected outcome in regional elections signals shifting political landscape.',
        },
        content_elements: [
          {
            type: 'text',
            text: 'Political analysts are scrambling to understand the implications of yesterday\'s surprising election results...',
          },
        ],
        taxonomy: {
          tags: [
            { text: 'Politics', slug: 'politics' },
            { text: 'Elections', slug: 'elections' },
          ],
          sections: [
            { name: 'Politics', path: '/politics' },
          ],
        },
        credits: {
          by: [
            {
              _id: 'author11',
              type: 'author',
              name: 'Marcus Johnson',
              bio: 'Political Analyst',
            },
          ],
        },
        canonical_url: '/sports/2025/05/16/winter-olympics-preparations',
        website_url: '/sports/2025/05/16/winter-olympics-preparations',
      }
    ]
  }
];

// Mock navigation data based on Arc XP View API schema
const mockNavigations: ANSNavigation[] = [
  {
    _id: 'main-nav',
    version: '1.0.0',
    site_id: 'news-site',
    name: 'main-nav',
    navigation_title: 'Main Navigation',
    last_updated_date: '2025-05-17T10:00:00Z',
    created_date: '2025-05-01T08:00:00Z',
    items: [
      {
        _id: 'home',
        display_name: 'Home',
        url: '/',
        node_type: 'link',
        node_class: 'nav-item',
        display: true
      },
      {
        _id: 'politics',
        display_name: 'Politics',
        url: '/politics',
        node_type: 'link',
        node_class: 'nav-item',
        display: true
      },
      {
        _id: 'business',
        display_name: 'Business',
        url: '/business',
        node_type: 'link',
        node_class: 'nav-item',
        display: true
      },
      {
        _id: 'technology',
        display_name: 'Technology',
        url: '/technology',
        node_type: 'link',
        node_class: 'nav-item',
        display: true
      },
      {
        _id: 'sports',
        display_name: 'Sports',
        url: '/sports',
        node_type: 'link',
        node_class: 'nav-item',
        display: true
      }
    ]
  },
  {
    _id: 'footer-nav',
    version: '1.0.0',
    site_id: 'news-site',
    name: 'footer-nav',
    navigation_title: 'Footer Navigation',
    last_updated_date: '2025-05-17T10:00:00Z',
    created_date: '2025-05-01T08:00:00Z',
    items: [
      {
        _id: 'about',
        display_name: 'About Us',
        url: '/about',
        node_type: 'link',
        node_class: 'footer-item',
        display: true
      },
      {
        _id: 'contact',
        display_name: 'Contact',
        url: '/contact',
        node_type: 'link',
        node_class: 'footer-item',
        display: true
      },
      {
        _id: 'terms',
        display_name: 'Terms of Service',
        url: '/terms',
        node_type: 'link',
        node_class: 'footer-item',
        display: true
      },
      {
        _id: 'privacy',
        display_name: 'Privacy Policy',
        url: '/privacy',
        node_type: 'link',
        node_class: 'footer-item',
        display: true
      }
    ]
  }
];

export class MockViewAPI implements IViewAPI {
  private static instance: MockViewAPI;
  private constructor() {}

  static getInstance(): MockViewAPI {
    if (!MockViewAPI.instance) {
      MockViewAPI.instance = new MockViewAPI();
    }
    return MockViewAPI.instance;
  }

  async getLatestArticles(): Promise<ViewAPIResponse<ANSArticle>> {
    // Sort articles by date (newest first)
    const sortedArticles = [...mockArticles].sort(
      (a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    );

    return {
      count: sortedArticles.length,
      content_elements: sortedArticles,
    };
  }

  async getArticlesBySection(section: string, excludeIds: string[] = []): Promise<ViewAPIResponse<ANSArticle>> {
    const filteredArticles = mockArticles.filter(
      article =>
        article.taxonomy.sections.some(s => s.path === `/${section}`) &&
        !excludeIds.includes(article._id)
    );

    // Sort by date (newest first)
    const sortedArticles = filteredArticles.sort(
      (a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    );

    return {
      count: sortedArticles.length,
      content_elements: sortedArticles,
    };
  }

  async getArticleById(id: string): Promise<ANSArticle | null> {
    const article = mockArticles.find(a => a._id === id);
    return article || null;
  }

  async getNavigationById(id: string): Promise<NavigationAPIResponse | null> {
    const navigation = mockNavigations.find(nav => nav._id === id);
    if (!navigation) return null;

    return {
      _id: id,
      navigation: navigation
    };
  }

  async getCollectionById(id: string, website?: string): Promise<CollectionAPIResponse | null> {
    const collection = mockCollections.find(col => col._id === id);
    if (!collection) return null;

    return {
      _id: id,
      collection: collection
    };
  }

  async getAllArticles(): Promise<ANSArticle[]> {
    // Get all unique articles from both mockArticles and collections
    const allArticles = [
      ...mockArticles,
      ...mockCollections.flatMap(collection => collection.content_elements)
    ];

    // Remove duplicates by _id
    const uniqueArticles = Array.from(
      new Map(allArticles.map(article => [article._id, article])).values()
    );

    return uniqueArticles;
  }

  async getArticleByUrl(url: string): Promise<ANSArticle | null> {
    // Search through all articles
    const allArticles = await this.getAllArticles();

    // Normalize URLs for comparison
    // Remove leading slash if present
    const normalizedUrl = url.startsWith('/') ? url.substring(1) : url;
    
    // Find article by website_url (with or without leading slash)
    const article = allArticles.find(article => {
      const articleUrl = article.website_url.startsWith('/') ? 
        article.website_url.substring(1) : article.website_url;
      return articleUrl === normalizedUrl;
    });
    
    return article || null;
  }
}

// Real API service (to be implemented later)
export class ViewAPI implements IViewAPI {
  private static instance: ViewAPI;

  private constructor() {}

  static getInstance(): ViewAPI {
    if (!ViewAPI.instance) {
      ViewAPI.instance = new ViewAPI();
    }
    return ViewAPI.instance;
  }

  // TODO: Implement these methods with real API calls
  async getLatestArticles(): Promise<ViewAPIResponse<ANSArticle>> {
    return {
      count: 0,
      content_elements: [],
    };
  }

  async getArticlesBySection(section: string, excludeIds: string[] = []): Promise<ViewAPIResponse<ANSArticle>> {
    return {
      count: 0,
      content_elements: [],
    };
  }

  async getArticleById(id: string): Promise<ANSArticle | null> {
    return null;
  }

  async getNavigationById(id: string): Promise<NavigationAPIResponse | null> {
    return null;
  }

  async getCollectionById(id: string, website?: string): Promise<CollectionAPIResponse | null> {
    return null;
  }

  async getAllArticles(): Promise<ANSArticle[]> {
    // TODO: Implement with real API call
    return [];
  }

  async getArticleByUrl(url: string): Promise<ANSArticle | null> {
    // TODO: Implement with real API call
    return null;
  }
}
