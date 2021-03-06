const products = 
[
  {   "id": 1,
      "category": "oilCanvas",         
      "name": "Calm Painting",
      "url": "https://nookipedia.com/wiki/Calm_Painting",
      "image_url": "https://dodo.ac/np/images/c/c2/Calm_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "A Sunday Afternoon on the Island of La Grande Jatte",
      "author": "Georges Seurat",
      "year": "circa 1885",
      "art_style": "Oil on canvas",
      "description": "Seurat, known as the founder of neo-impressionism, invented the use of brightly colored dots. His method, which does not involve mixing pigments, took time. This piece, for instance, took two years. It shows a crowd enjoying a day off at the river Seine in France.",
      "price": 6000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 2.0,
      "length": 1.5
  },
  {   "id": 2,
      "category": "oilCanvas",   
      "name": "Common Painting",
      "url": "https://nookipedia.com/wiki/Common_Painting",
      "image_url": "https://dodo.ac/np/images/3/34/Common_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Gleaners",
      "author": "Jean-François Millet",
      "year": "1857",
      "art_style": "Oil on canvas",
      "description": "The signature piece from Millet, who was known for depicting the lives of commoners in the 19th century. Notice the abundant crops visible in the background relative to the meager wheat remaining for workers. This art served as social commentary in a time of great inequality.",
      "price": 4980,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 3,
      "category": "woodblockPrint",   
      "name": "Dynamic Painting",
      "url": "https://nookipedia.com/wiki/Dynamic_Painting",
      "image_url": "https://dodo.ac/np/images/d/d3/Dynamic_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "Thirty-Six Views of Mount Fuji The Great Wave off Kanagawa",
      "author": "Katsushika Hokusai",
      "year": "circa 1831",
      "art_style": "Woodblock print",
      "description": "The signature piece of ukiyo-e artist Katsushika Hokusai, painted as part of a series when he was in his 60s. Although it is dubbed \"Thirty-Six Views,\" he eventually added 10 more to make 46 in total.",
      "price": 50080,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 4,
      "category": "bronze",   
      "name": "Familiar Statue",
      "url": "https://nookipedia.com/wiki/Familiar_Statue",
      "image_url": "https://dodo.ac/np/images/c/cf/Familiar_Statue_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Thinker",
      "author": "Auguste Rodin",
      "year": "1902",
      "art_style": "Bronze",
      "description": "This bronze sculpture was crafted by the French sculptor Rodin, known as the father of modern sculpture. The incredibly famous original is located in France. The sculpture was casted over 20 times. As such, authentic pieces can be found all around the world.",
      "price": 65280,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This statue is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 5,
      "category": "oilCanvas",   
      "name": "Flowery Painting",
      "url": "https://nookipedia.com/wiki/Flowery_Painting",
      "image_url": "https://dodo.ac/np/images/6/6e/Flowery_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "Sunflowers",
      "author": "Vincent van Gogh",
      "year": "circa 1888",
      "art_style": "Oil on canvas",
      "description": "Van Gogh painted this piece when he moved to the south of France in search of more vibrant colors. Yellow was Van Gogh's favorite color, and he made seven paintings that featured sunflowers during this time.",
      "price": 20301,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 6,
      "category": "oilCanvas",   
      "name": "Glowing Painting",
      "url": "https://nookipedia.com/wiki/Glowing_Painting",
      "image_url": "https://dodo.ac/np/images/2/29/Glowing_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Fighting Temeraire",
      "author": "Joseph Mallord William Turner",
      "year": "1839",
      "art_style": "Oil on canvas",
      "description": "A famous piece by Turner, a \"master of light. \"It shows an English Navy ship commanded by Admiral Nelson as it's being tugged toward its dismantling.",
      "price": 4120,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 7,
      "category": "bronze",   
      "name": "Great Statue",
      "url": "https://nookipedia.com/wiki/Great_Statue",
      "image_url": "https://dodo.ac/np/images/7/71/Great_Statue_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "King Kamehameha I",
      "author": "Thomas Ridgeway Gould",
      "year": "circa 1883",
      "art_style": "Bronze",
      "description": "A bronze sculpture of King Kamehameha I, who founded the Kingdom of Hawaii in 1810. Traditionally, the sculpture is draped with many leis every year on June 11th.",
      "price": 200000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This statue is always genuine.",
      "width": 2.0,
      "length": 2.0
  },
  {   "id": 8,
      "category": "oilCanvas",   
      "name": "Moody Painting",
      "url": "https://nookipedia.com/wiki/Moody_Painting",
      "image_url": "https://dodo.ac/np/images/2/22/Moody_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Sower",
      "author": "Jean-François Millet",
      "year": "circa 1850",
      "art_style": "Oil on canvas",
      "description": "Millet painted this piece of a farmer sowing wheat seeds in a field after moving to the countryside from Paris. If the piece reminds you of Van Gogh, that's likely because Van Gogh himself was inspired by it!",
      "price": 362031,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 9,
      "category": "oilWoods",   
      "name": "Mysterious Painting",
      "url": "https://nookipedia.com/wiki/Mysterious_Painting",
      "image_url": "https://dodo.ac/np/images/5/55/Mysterious_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "Isle of The Dead",
      "author": "Arnold Böcklin",
      "year": "1883",
      "art_style": "Oil on wood",
      "description": "A small boat carrying a corpse glides quietly over a still sea to an island of graves surrounded by cliffs. The air of this piece by symbolist painter Böcklin is chilling, but also somehow calm. Böcklin worked here to capture not what he could see, but some of humanity's inner contemplations.",
      "price": 96000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 2.0,
      "length": 1.0
  },
  {   "id": 10,
      "category": "oilCanvas",   
      "name": "Nice Painting",
      "url": "https://nookipedia.com/wiki/Nice_Painting",
      "image_url": "https://dodo.ac/np/images/3/32/Nice_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Fifer",
      "author": "Édouard Manet",
      "year": "1866",
      "art_style": "Oil on canvas",
      "description": "One of Manet's earlier works, this painting depicts a young flautist dressed in military uniform. Manet's works are notable for their lack of linear perspective and strong color contrast. These attributes led some to call him \"The Father of Impressionism\" and make comparisons to Vélazquez. Fun fact-flautists can determine what note the boy is playing just by studying the painting closely.",
      "price": 10000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 2.0
  },
  {   "id": 11,
      "category": "oilCanvas",   
      "name": "Perfect Painting",
      "url": "https://nookipedia.com/wiki/Perfect_Painting",
      "image_url": "https://dodo.ac/np/images/5/54/Perfect_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "Apples and Oranges",
      "author": "Paul Cézanne",
      "year": "circa 1899",
      "art_style": "Oil on canvas",
      "description": "This still life is known to have inspired the work of many other artists, including Pablo Picasso. Rather than trying to recreate an image, Cézanne captured the beauty of shapes from many angles. With this work, Cézanne draws on both the atmosphere of his subjects and the spirit of its beholders.",
      "price": 250000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 12,
      "category": "oilCanvas",   
      "name": "Proper Painting",
      "url": "https://nookipedia.com/wiki/Proper_Painting",
      "image_url": "https://dodo.ac/np/images/f/f0/Proper_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "A Bar at The Folies-Bergère",
      "author": "Édouard Manet",
      "year": "circa 1882",
      "art_style": "Oil on canvas",
      "description": "Close inspection of the mirror behind this painting's subject reveals many mysteries and paradoxes... In fact, the painting is based on multiple perspectives, which explains the unusual placement of some items. Sadly, this is Manet's last major work. He passed away a year after it was complete, at age 51.",
      "price": 320000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 2.0,
      "length": 1.0
  },
  {   "id": 13,
      "category": "oilCanvas",   
      "name": "Sinking Painting",
      "url": "https://nookipedia.com/wiki/Sinking_Painting",
      "image_url": "https://dodo.ac/np/images/a/a5/Sinking_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "Ophelia",
      "author": "John Everett Millais",
      "year": "1852",
      "art_style": "Oil on canvas",
      "description": "Ophelia is a tragic figure in the Shakespearean play \"Hamlet.\" There is an otherworldly expression on her face as she lies unconscious in a river. She is surrounded by the beauty of nature as she floats between life and death.",
      "price": 15000,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 14,
      "category": "oilCanvas",   
      "name": "Twinkling Painting",
      "url": "https://nookipedia.com/wiki/Twinkling_Painting",
      "image_url": "https://dodo.ac/np/images/7/77/Twinkling_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Starry Night",
      "author": "Vincent van Gogh",
      "year": "1889",
      "art_style": "Oil on canvas",
      "description": "Van Gogh's signature piece, painted while he was hospitalized at an asylum. This view from his room includes memories and imaginations. In letters to friends, the artist called it a failure.",
      "price": 14200,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 1.0,
      "length": 1.0
  },
  {   "id": 15,
      "category": "oilCanvas",   
      "name": "Warm Painting",
      "url": "https://nookipedia.com/wiki/Warm_Painting",
      "image_url": "https://dodo.ac/np/images/3/38/Warm_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "The Clothed Maja",
      "author": "Francisco de Goya",
      "year": "circa 1805",
      "art_style": "Oil on canvas",
      "description": "It is said that this painting is a more discreet version of an earlier work known as \"The Nude Maja.\" It is also known that Francisco de Goya was quite popular in his own time. Could these facts be related? A third, unrelated fact-the word \"maja\" refers to a \"stylish young lady of Madrid.\"",
      "price": 25870,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 2.0,
      "length": 1.0
  },
  {   "id": 16,
      "category": "oilCanvas",   
      "name": "Worthy Painting",
      "url": "https://nookipedia.com/wiki/Worthy_Painting",
      "image_url": "https://dodo.ac/np/images/1/11/Worthy_Painting_NH_Icon.png",
      "has_fake": false,
      "fake_image_url": "",
      "art_name": "Liberty Leading the People",
      "author": "Eugène Delacroix",
      "year": "1830",
      "art_style": "Oil on canvas",
      "description": "Painted by leading 19th century Romantic artist Delacroix in the same year as a French revolution. The woman in the center is often mistaken for Joan of Arc, but she is actually the fictional \"Marianne.\"",
      "price": 256200,
      "sell": 1245,
      "availability": "Jolly Redd's Treasure Trawler",
      "authenticity": "This painting is always genuine.",
      "width": 2.0,
      "length": 1.5
  }
]

export default products;