document.getElementById('numerology-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  
  const lifePathNumber = calculateLifePathNumber(dob);
  const expressionNumber = calculateExpressionNumber(name);
  const soulUrgeNumber = calculateSoulUrgeNumber(name);
  const personalityNumber = calculatePersonalityNumber(name);
  const birthdayNumber = calculateBirthdayNumber(dob);
  const maturityNumber = calculateMaturityNumber(lifePathNumber, expressionNumber);
  const personalYearNumber = calculatePersonalYearNumber(dob);
  const personalMonthNumber = calculatePersonalMonthNumber(personalYearNumber);
  const personalDayNumber = calculatePersonalDayNumber(personalMonthNumber);
  const challengeNumbers = calculateChallengeNumbers(dob);

  const reportContent = `
      <div>
          <h3>Life Path Number: ${lifePathNumber}</h3>
          <p><strong>Significance:</strong> The Life Path Number reveals your purpose in life and the path you are meant to follow.</p>
          <p>${getLifePathDescription(lifePathNumber)}</p>
      </div>
      <div>
          <h3>Expression Number: ${expressionNumber}</h3>
          <p><strong>Significance:</strong> The Expression Number reveals your natural talents, abilities, and challenges.</p>
          <p>${getExpressionNumberDescription(expressionNumber)}</p>
      </div>
      <div>
          <h3>Soul Urge Number: ${soulUrgeNumber}</h3>
          <p><strong>Significance:</strong> The Soul Urge Number reveals your inner self, your true desires, and what motivates you in life.</p>
          <p>${getSoulUrgeNumberDescription(soulUrgeNumber)}</p>
      </div>
      <div>
          <h3>Maturity Number: ${maturityNumber}</h3>
          <p><strong>Significance:</strong> The Maturity Number indicates the traits you will develop as you mature and the ultimate goals you are likely to achieve in life.</p>
          <p>${getMaturityNumberDescription(maturityNumber)}</p>
      </div>
      <div>
          <h3>Personality Number: ${personalityNumber}</h3>
          <p><strong>Significance:</strong> The Personality Number reveals the outward appearance you project to others.</p>
          <p>Your Personality Number is ${personalityNumber}.</p>
      </div>
      <div>
          <h3>Birthday Number: ${birthdayNumber}</h3>
          <p><strong>Significance:</strong> The Birthday Number indicates a key talent or skill that you possess.</p>
          <p>${getBirthdayNumberDescription(birthdayNumber)}</p>
      </div>
      <div>
          <h3>Personal Year Number: ${personalYearNumber}</h3>
          <p><strong>Significance:</strong> The Personal Year Number provides insight into the theme and opportunities of the current year.</p>
          <p>Your Personal Year Number is ${personalYearNumber}.</p>
      </div>
      <div>
          <h3>Personal Month Number: ${personalMonthNumber}</h3>
          <p><strong>Significance:</strong> The Personal Month Number indicates the energy and focus for a particular month.</p>
          <p>Your Personal Month Number is ${personalMonthNumber}.</p>
      </div>
      <div>
          <h3>Personal Day Number: ${personalDayNumber}</h3>
          <p><strong>Significance:</strong> The Personal Day Number indicates the energy and focus for a specific day.</p>
          <p>Your Personal Day Number is ${personalDayNumber}.</p>
      </div>
      <div>
          <h3>Challenge Numbers: ${challengeNumbers.join(', ')}</h3>
          <p><strong>Significance:</strong> The Challenge Number reveals obstacles or difficulties you might face at different stages in your life.</p>
          <p>Your Challenge Numbers are ${challengeNumbers.join(', ')}.</p>
      </div>
  `;

  document.getElementById('report-content').innerHTML = reportContent;
  document.getElementById('report').classList.remove('hidden');
});

// Helper function to reduce a number to a single digit or a master number (11, 22, 33)
function reduceToSingleDigit(num) {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
}

// Calculate Life Path Number
function calculateLifePathNumber(dob) {
  const parts = dob.split('-'); // Expecting format YYYY-MM-DD
  const year = reduceToSingleDigit(parts[0].split('').reduce((acc, digit) => acc + parseInt(digit), 0));
  const month = reduceToSingleDigit(parts[1].split('').reduce((acc, digit) => acc + parseInt(digit), 0));
  const day = reduceToSingleDigit(parts[2].split('').reduce((acc, digit) => acc + parseInt(digit), 0));
  
  return reduceToSingleDigit(year + month + day);
}

// Description for Life Path Numbers
function getLifePathDescription(number) {
  const descriptions = {
      1: "As a Life Path 1, you are a natural leader with a strong spirit of innovation. You have a passion for art and the ability to manifest your desires easily. You are driven to be the best and rarely let anything stand in your way. However, you can be critical of yourself and others.",
      2: "As a Life Path 2, you thrive in partnerships and are in tune with the world around you. You are a natural peacemaker and find fulfillment in helping others and serving the greater good. However, you can struggle with over-giving, which might lead to resentment if you don't find your own purpose.",
      3: "As a Life Path 3, you are highly creative and communicate effectively. You are optimistic, generous, and likely to excel in the arts. However, you might struggle with responsibilities and managing finances, and when emotionally hurt, you can lash out.",
      4: "As a Life Path 4, you are grounded, practical, and disciplined, often serving as the foundation others build upon. You value organization and hard work but may struggle with relaxation and can be perceived as stubborn or too serious.",
      5: "As a Life Path 5, you seek freedom and adventure, constantly craving new experiences. You are spontaneous and dislike routine, but this can lead to restlessness and difficulty in forming stable relationships.",
      6: "As a Life Path 6, you are nurturing, responsible, and community-oriented, thriving in roles that involve caring for others. However, you may struggle with being overly critical or becoming a martyr, neglecting your own needs.",
      7: "As a Life Path 7, you are a seeker of truth, driven by a deep spiritual quest. You are wise and introspective but may struggle with feelings of isolation or cynicism if you lose faith.",
      8: "As a Life Path 8, you are ambitious and have a strong desire for material success. You are a natural leader and are driven by the pursuit of achievement. However, you may struggle with work-life balance and the tendency to overvalue financial security.",
      9: "As a Life Path 9, you are compassionate and driven by a desire to improve the world. You are generous and often take on the role of a caretaker, but you may struggle with letting go of the past and managing your own needs."
  };

  return descriptions[number] || "Unknown Life Path Number";
}

// Description for Expression Numbers
function getExpressionNumberDescription(number) {
  const descriptions = {
      1: "As an Expression Number 1, you possess strong leadership capabilities and the ability to create your own opportunities. You are highly independent and prefer to work alone, but this can make you seem aggressive or self-centered. It would benefit you to learn patience and consideration.",
      2: "As an Expression Number 2, you excel in relationships and working with others. You are cooperative, supportive, and strive for balance, though you may struggle with self-doubt and indecision. Remember to follow your head instead of your heart sometimes.",
      3: "As an Expression Number 3, you are a naturally skilled communicator with a talent for inspiring others. Your social charm is magnetic, but your enthusiasm may distract you from developing deeper relationships or completing projects.",
      4: "As an Expression Number 4, you are organized, practical, and hardworking, making you highly capable in managing projects and teams. However, you may struggle with being too rigid or stubborn, which can hinder your growth.",
      5: "As an Expression Number 5, you crave variety and freedom, always seeking new experiences. Your adventurous spirit is exciting, but it can lead to inconsistency and challenges in maintaining stable relationships.",
      6: "As an Expression Number 6, you are nurturing and protective, particularly towards family and close loved ones. Your heart of gold is admirable, but remember to take care of yourself as well, so you don't neglect your own needs.",
      7: "As an Expression Number 7, you are a truth seeker who thrives on intellectual and spiritual exploration. You are driven by logic and deep thinking, but this may cause you to become suspicious or disconnected from others.",
      8: "As an Expression Number 8, you have a natural talent for business and excellent judgment in people, money, and plans. Your ambition is powerful, but be mindful of balancing material success with meaningful personal connections.",
      9: "As an Expression Number 9, you are compassionate and creative, always striving to make life better for others. However, if you are not living in alignment with this purpose, you may become self-centered and detached from important emotions.",
      11: "As an Expression Number 11, you are blessed with profound intuitive capabilities and an idealistic vision. You are a beacon of hope and light to others, but may struggle with practical thinking needed to bring your dreams to fruition.",
      22: "As an Expression Number 22, you possess the potential to achieve grand ideas and realities. You are a cooperative team leader, but must be careful not to become domineering, which could cause you to lose support from others.",
      33: "As an Expression Number 33, you combine your mind and heart to be an uplifting source of hope and healing. You guide others toward truth and inner knowledge, but must be careful not to feel burdened by others' struggles."
  };

  return descriptions[number] || "Unknown Expression Number";
}

// Description for Soul Urge Numbers
function getSoulUrgeNumberDescription(number) {
  const descriptions = {
      1: "As a Soul Urge Number 1, you are driven by independence and self-sufficiency. Your desire is to be a leader, confident in your abilities and unafraid to make difficult decisions. However, your strong leadership can sometimes come into conflict with others, and your competitive streak may need to be managed.",
      2: "As a Soul Urge Number 2, you are sensitive and emotional, with a deep desire for security and comfort. Your powerful intuition is your greatest asset, and learning to trust it will guide you to make the right decisions.",
      3: "As a Soul Urge Number 3, you are a born entertainer with a love for art and communication. Your charisma attracts others, but you need to learn to express your deeper thoughts and feelings to truly succeed.",
      4: "As a Soul Urge Number 4, you value order and stability, finding great satisfaction in working towards goals. You set an example of discipline and hard work, but be careful not to stifle others with your desire for structure.",
      5: "As a Soul Urge Number 5, you are an explorer at heart, with a charismatic personality and a desire to experience all that life has to offer. Your challenge is to face your fears and develop the discipline needed to manifest your success.",
      6: "As a Soul Urge Number 6, you seek harmony and balance in your relationships, caring deeply for the well-being of others. However, you must remember to take care of your own needs and not lose yourself in the process.",
      7: "As a Soul Urge Number 7, you are independent and analytical, always seeking the truth and delving deeper into life's mysteries. You may struggle to express your feelings, preferring tangible evidence and logical reasoning.",
      8: "As a Soul Urge Number 8, you are focused on material success and gaining mastery over the physical world. Your drive and ambition are strong, but you must balance your pursuit of wealth with a broader perspective on life.",
      9: "As a Soul Urge Number 9, you are deeply concerned with global consciousness and humanitarian efforts. Your broad perspective allows you to see the bigger picture, but you may need to balance this with attention to your own needs.",
      11: "As a Soul Urge Number 11, you are on a unique spiritual journey, guided by a strong intuition and a deep understanding of the bigger picture. Your journey may have been difficult, but it has made you wise and capable of solving problems effectively.",
      22: "As a Soul Urge Number 22, you are driven to leave a mark on the world, combining the power and intuition of a master number with practical aptitude. Your path is not always easy, but your potential to make a positive impact is immense.",
      33: "As a Soul Urge Number 33, you are the 'master teacher,' deeply nurturing and compassionate. Your path may be challenging, but your ability to see the larger picture and find balance in life makes you a supreme leader."
  };

  return descriptions[number] || "Unknown Soul Urge Number";
}

// Description for Maturity Numbers
function getMaturityNumberDescription(number) {
  const descriptions = {
      1: "As a Maturity Number 1, you are associated with leadership, independence, and a desire for recognition. Your natural inclination to lead can sometimes make you appear bossy or self-centered, but your drive for success is undeniable.",
      2: "As a Maturity Number 2, you thrive in team environments, displaying diplomacy and patience. You are not driven by recognition, but by cooperation and support, making you popular in your social circles.",
      3: "As a Maturity Number 3, you are naturally inclined towards creativity and the arts. Your positive and extroverted personality makes you a great partner and a family-oriented individual.",
      4: "As a Maturity Number 4, you value stability and success, both personally and professionally. Your practical approach to goal-setting and strong work ethic are key to your achievements.",
      5: "As a Maturity Number 5, you are energetic, outgoing, and enjoy taking risks. Your jolly personality makes you fun to be around, but you also have a strong sense of discipline that drives your success.",
      6: "As a Maturity Number 6, you are deeply responsible and caring, always putting others' needs before your own. Your nurturing nature keeps you grounded, even in difficult times.",
      7: "As a Maturity Number 7, you are a visionary and philosopher, always seeking to understand the world and stay true to your morals. Your deep introspection and quest for knowledge define your path.",
      8: "As a Maturity Number 8, you are a natural leader, skilled at planning and working hard. Your ability to manage finances and take care of your family is a testament to your dedication and focus.",
      9: "As a Maturity Number 9, you are driven by compassion and generosity, always seeking to serve others. Your inclination towards humanitarian activities defines your purpose in life.",
      11: "As a Maturity Number 11, you are naturally inclined towards spirituality and creativity. Your kindness and compassion make you a valued friend and a wise guide to others.",
      22: "As a Maturity Number 22, you are confident and high-energy, always looking for solutions to big challenges. Your problem-solving skills and determination make you successful in your field.",
      33: "As a Maturity Number 33, you are a master at seeing the larger picture and finding balance in life. Your hard work and dedication make you a supreme leader, but you must be careful not to become bossy or self-centered."
  };

  return descriptions[number] || "Unknown Maturity Number";
}

// Description for Birthday Numbers
function getBirthdayNumberDescription(number) {
  const descriptions = {
      1: "As a Birthday Number 1, you are a self-starter with innovative ideas and a determination to succeed. Your leadership qualities are strong, and you are not afraid to be the first to try something new.",
      2: "As a Birthday Number 2, you have a great talent for finding solutions and advising others. Your intuitive nature allows you to see all sides of a situation, making you a valuable mediator.",
      3: "As a Birthday Number 3, you are a natural communicator with a talent for expressing your thoughts creatively. Your charismatic presence inspires others to get on board with your ideas.",
      4: "As a Birthday Number 4, you bring stability and rationality to any situation. Your hard work and perseverance make you a dependable friend, colleague, parent, and partner.",
      5: "As a Birthday Number 5, flexibility is your forte. You can easily adapt to new circumstances and find excitement in unexpected changes, making you a powerful opportunist.",
      6: "As a Birthday Number 6, your heart is your gift. You are a natural-born nurturer with a talent for helping and healing others, always putting the needs of those you love first.",
      7: "As a Birthday Number 7, you possess a refined mind and a deep urge to uncover life's mysteries. Your quest for knowledge and understanding makes you a visionary and a seeker of truth.",
      8: "As a Birthday Number 8, your story is one of success. Your talent for setting and reaching goals is unparalleled, and you hold a great amount of power to achieve your ambitions.",
      9: "As a Birthday Number 9, your compassion makes you shine. You are devoted to helping others and find the greatest satisfaction in being of service to the greater good.",
      10: "As a Birthday Number 10, you are blessed with great leadership skills. Your sharp mind allows you to dream up ingenious ideas and organize all the details to carry them out.",
      11: "As a Birthday Number 11, you have a keen awareness of what's happening around you. Your strong intuition helps you understand the unspoken feelings and fears of others, making you a great guide and supporter.",
      12: "As a Birthday Number 12, creativity is a driving force in your life. Your rich imagination and unique way of expressing yourself make you an inspiration to others.",
      13: "As a Birthday Number 13, you are a conscientious worker with a knack for turning creative ideas into reality. Your optimistic but practical outlook keeps you determined and on track.",
      14: "As a Birthday Number 14, you are open-minded and wise enough to think before you jump into new situations. Your pragmatic approach helps ensure your efforts are directed into meaningful experiences.",
      15: "As a Birthday Number 15, your love for others is powerful, and your curious nature brings you into contact with a variety of people who benefit from your wisdom.",
      16: "As a Birthday Number 16, your inquisitive mind allows you to uncover important truths. You have a special ability to read into people's feelings and motives, sharing your wisdom with them.",
      17: "As a Birthday Number 17, you are independent and ambitious, capable of performing every step of a project with efficiency, focus, and skill.",
      18: "As a Birthday Number 18, you are open-minded and open-hearted, driven to leave the world better than you found it. You find fulfillment in being of service to others.",
      19: "As a Birthday Number 19, independence and self-sufficiency are necessities to you. You are capable and willing to take big risks to achieve the life you desire.",
      20: "As a Birthday Number 20, you relate to others on a deep level, dedicated to building harmonious relationships. Your sensitive intuition helps you sense and address the needs of others.",
      21: "As a Birthday Number 21, you thrive in social settings and find great value in connecting with people. Your natural charm and creativity make you an inspiring presence.",
      22: "As a Birthday Number 22, you have the power to create great things. Your determination and ability to cooperate with others make you an effective teammate or leader.",
      23: "As a Birthday Number 23, you have a zest for life and a desire to experience everything possible. Your easygoing nature and optimism inspire those around you.",
      24: "As a Birthday Number 24, you have a heart of gold and excel at maintaining balanced, stable relationships. Your loyalty and nurturing nature make you a protector and provider.",
      25: "As a Birthday Number 25, your ability to process information on both conscious and subconscious levels gives you a deep understanding of the world.",
      26: "As a Birthday Number 26, you are driven to succeed and find fulfillment in work that benefits others. Your intuitive awareness allows you to create innovative solutions.",
      27: "As a Birthday Number 27, you are tolerant and compassionate, able to apply your vast knowledge toward the greater good.",
      28: "As a Birthday Number 28, you recognize the value of teamwork and make a compassionate leader who brings people together toward achievement.",
      29: "As a Birthday Number 29, you have the ability to bring things together and see how everything is connected. Your insights help you navigate complex situations.",
      30: "As a Birthday Number 30, you are an original thinker with excellent communication skills. Your creativity allows you to convey your ideas in a way that uplifts others.",
      31: "As a Birthday Number 31, you effectively mix practicality with imagination. Your ability to manifest creative ideas on the physical plane makes you a successful innovator."
  };

  return descriptions[number] || "Unknown Birthday Number";
}

// Calculate Expression Number
function calculateExpressionNumber(name) {
  const letterValues = {
      A: 1, J: 1, S: 1,
      B: 2, K: 2, T: 2,
      C: 3, L: 3, U: 3,
      D: 4, M: 4, V: 4,
      E: 5, N: 5, W: 5,
      F: 6, O: 6, X: 6,
      G: 7, P: 7, Y: 7,
      H: 8, Q: 8, Z: 8,
      I: 9, R: 9
  };
  
  const fullName = name.toUpperCase().replace(/[^A-Z]/g, ''); // Remove any non-letter characters
  const total = fullName.split('').reduce((acc, letter) => acc + letterValues[letter], 0);
  
  return reduceToSingleDigit(total);
}

// Calculate Soul Urge Number
function calculateSoulUrgeNumber(name) {
  const letterValues = {
      A: 1, E: 5, I: 9, O: 6, U: 3
  };
  
  const vowels = name.toUpperCase().replace(/[^AEIOU]/g, ''); // Extract vowels only
  const total = vowels.split('').reduce((acc, letter) => acc + letterValues[letter], 0);
  
  return reduceToSingleDigit(total);
}

// Calculate Personality Number
function calculatePersonalityNumber(name) {
  const letterValues = {
      B: 2, C: 3, D: 4, F: 6, G: 7,
      H: 8, J: 1, K: 2, L: 3, M: 4,
      N: 5, P: 7, Q: 8, R: 9, S: 1,
      T: 2, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  
  const consonants = name.toUpperCase().replace(/[AEIOU]/g, ''); // Extract consonants only
  const total = consonants.split('').reduce((acc, letter) => acc + letterValues[letter], 0);
  
  return reduceToSingleDigit(total);
}

// Calculate Birthday Number
function calculateBirthdayNumber(dob) {
  const day = parseInt(dob.split('-')[2]);
  return reduceToSingleDigit(day);
}

// Calculate Maturity Number
function calculateMaturityNumber(lifePathNumber, expressionNumber) {
  return reduceToSingleDigit(lifePathNumber + expressionNumber);
}

// Calculate Personal Year Number
function calculatePersonalYearNumber(dob) {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  const month = parseInt(dob.split('-')[1]);
  const day = parseInt(dob.split('-')[2]);
  
  const personalYear = reduceToSingleDigit(currentYear + month + day);
  return personalYear;
}

// Calculate Personal Month Number
function calculatePersonalMonthNumber(personalYearNumber) {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth is 0-based, so add 1
  
  return reduceToSingleDigit(personalYearNumber + currentMonth);
}

// Calculate Personal Day Number
function calculatePersonalDayNumber(personalMonthNumber) {
  const today = new Date();
  const currentDay = today.getDate();
  
  return reduceToSingleDigit(personalMonthNumber + currentDay);
}

// Calculate Challenge Numbers
function calculateChallengeNumbers(dob) {
  const parts = dob.split('-'); // Expecting format YYYY-MM-DD
  const yearDigits = parts[0].split('').map(digit => parseInt(digit));
  const monthDigits = parts[1].split('').map(digit => parseInt(digit));
  const dayDigits = parts[2].split('').map(digit => parseInt(digit));
  
  const firstChallenge = Math.abs(monthDigits.reduce((acc, digit) => acc + digit, 0) - dayDigits.reduce((acc, digit) => acc + digit, 0));
  const secondChallenge = Math.abs(dayDigits.reduce((acc, digit) => acc + digit, 0) - yearDigits.reduce((acc, digit) => acc + digit, 0));
  const thirdChallenge = Math.abs(firstChallenge - secondChallenge);
  
  return [
      reduceToSingleDigit(firstChallenge),
      reduceToSingleDigit(secondChallenge),
      reduceToSingleDigit(thirdChallenge)
  ];
}
