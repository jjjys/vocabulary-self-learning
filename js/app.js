let words = [];

// 기본 예시 단어(로컬 JSON 로드 실패 시 사용)
const defaultWords = [
    {"word": "several", "meaning": "몇몇", "example": "There are several books on the table.", "explanation": "A small number of items or people, more than two but not many.", "synonyms": "some, few", "antonyms": "many, none"},
    {"word": "disappear", "meaning": "사라지다", "example": "The sun disappeared behind the clouds.", "explanation": "To vanish or go out of sight.", "synonyms": "vanish, fade", "antonyms": "appear, emerge"},
    {"word": "blue", "meaning": "파란색", "example": "The sky is blue today.", "explanation": "A color like that of a clear sky.", "synonyms": "azure, navy", "antonyms": "red, yellow"},
    {"word": "shoot", "meaning": "쏘다", "example": "He shot an arrow at the target.", "explanation": "To fire a weapon or project something rapidly.", "synonyms": "fire, launch", "antonyms": "miss, catch"},
    {"word": "memory", "meaning": "기억", "example": "I have a good memory of that day.", "explanation": "The ability to recall past experiences or events.", "synonyms": "recollection, recall", "antonyms": "forgetfulness, amnesia"},
    {"word": "arrive", "meaning": "도착하다", "example": "They arrived at the station early.", "explanation": "To reach a destination or place.", "synonyms": "reach, come", "antonyms": "leave, depart"},
    {"word": "sight", "meaning": "시야", "example": "The mountain came into sight.", "explanation": "The ability to see or something visible.", "synonyms": "vision, view", "antonyms": "blindness, invisibility"},
    {"word": "rub", "meaning": "문지르다", "example": "Rub your hands to warm them.", "explanation": "To move something back and forth against a surface.", "synonyms": "scrub, wipe", "antonyms": "polish, smooth"},
    {"word": "shut", "meaning": "닫다", "example": "Shut the window, it’s cold.", "explanation": "To close something.", "synonyms": "close, seal", "antonyms": "open, unlock"},
    {"word": "uncle", "meaning": "삼촌", "example": "My uncle visited us yesterday.", "explanation": "A brother of one’s parent.", "synonyms": "relative, kin", "antonyms": "aunt, nephew"},
    {"word": "beautiful", "meaning": "아름다운", "example": "The sunset is beautiful tonight.", "explanation": "Pleasing to the senses, especially sight.", "synonyms": "lovely, gorgeous", "antonyms": "ugly, plain"},
    {"word": "master", "meaning": "주인", "example": "The dog obeyed its master.", "explanation": "A person with control or skill; an expert.", "synonyms": "leader, expert", "antonyms": "servant, novice"},
    {"word": "fast", "meaning": "빠른", "example": "The car is very fast.", "explanation": "Moving or happening quickly.", "synonyms": "quick, swift", "antonyms": "slow, sluggish"},
    {"word": "swing", "meaning": "그네를 타다", "example": "The kids swing on the playground.", "explanation": "To move back and forth or side to side.", "synonyms": "rock, sway", "antonyms": "still, stop"},
    {"word": "although", "meaning": "비록 ~일지라도", "example": "Although it rained, we had fun.", "explanation": "Despite the fact that; however.", "synonyms": "though, even if", "antonyms": "because, since"},
    {"word": "group", "meaning": "그룹", "example": "A group of friends met up.", "explanation": "A number of people or things together.", "synonyms": "team, crowd", "antonyms": "individual, solo"},
    {"word": "song", "meaning": "노래", "example": "She sang a beautiful song.", "explanation": "A musical composition with words.", "synonyms": "tune, melody", "antonyms": "silence, noise"},
    {"word": "shrug", "meaning": "어깨를 으쓱하다", "example": "He shrugged when I asked him.", "explanation": "To raise the shoulders to express indifference.", "synonyms": "gesture, dismiss", "antonyms": "nod, agree"},
    {"word": "flower", "meaning": "꽃", "example": "The garden is full of flowers.", "explanation": "The colorful part of a plant.", "synonyms": "blossom, bloom", "antonyms": "weed, thorn"},
    {"word": "library", "meaning": "도서관", "example": "I borrowed a book from the library.", "explanation": "A place where books are kept for reading or borrowing.", "synonyms": "bookstore, archive", "antonyms": "park, gym"},
    {"word": "bone", "meaning": "뼈", "example": "The dog chewed on a bone.", "explanation": "A hard part of the skeleton.", "synonyms": "skeleton, frame", "antonyms": "flesh, muscle"},
    {"word": "bottom", "meaning": "바닥", "example": "The bottle is at the bottom of the bag.", "explanation": "The lowest part of something.", "synonyms": "base, floor", "antonyms": "top, surface"},
    {"word": "gift", "meaning": "선물", "example": "He gave me a wonderful gift.", "explanation": "Something given willingly to someone.", "synonyms": "present, donation", "antonyms": "debt, loan"},
    {"word": "wing", "meaning": "날개", "example": "The bird spread its wings.", "explanation": "A part used for flying or a section of a building.", "synonyms": "feather, flank", "antonyms": "body, center"},
    {"word": "problem", "meaning": "문제", "example": "Math is a problem for me.", "explanation": "A difficulty or issue needing a solution.", "synonyms": "issue, trouble", "antonyms": "solution, ease"},
    {"word": "warm", "meaning": "따뜻한", "example": "The soup is warm and tasty.", "explanation": "Moderately hot; comfortable.", "synonyms": "cozy, heated", "antonyms": "cold, cool"},
    {"word": "era", "meaning": "시대", "example": "The Victorian era was fascinating.", "explanation": "A period of time marked by distinct events.", "synonyms": "age, period", "antonyms": "moment, instant"},
    {"word": "secret", "meaning": "비밀", "example": "She told me a secret.", "explanation": "Something kept hidden from others.", "synonyms": "mystery, confidence", "antonyms": "public, open"},
    {"word": "office", "meaning": "사무실", "example": "He works in an office downtown.", "explanation": "A place where business or work is done.", "synonyms": "workplace, bureau", "antonyms": "home, outdoors"},
    {"word": "dress", "meaning": "옷을 입다", "example": "She dressed in a red gown.", "explanation": "To put on clothes; a garment.", "synonyms": "wear, gown", "antonyms": "undress, strip"}
];

// 상태 관리 변수
let currentWords = [...words];
let currentIndex = 0;
let correctCount = 0;
let wrongAnswers = [];
let isQuizActive = false;
let shuffledWords = [];

// DOM 요소 캐싱
const domElements = {
    startButton: document.getElementById('start'),
    progressText: document.getElementById('word-progress-text'),
    progressBar: document.getElementById('word-progress'),
    progressBarContainer: document.getElementById('word-progress-bar'),
    wordElement: document.getElementById('word'),
    speakWordButton: document.getElementById('speak-word'),
    exampleElement: document.getElementById('example'),
    explanationElement: document.getElementById('explanation'),
    optionsContainer: document.getElementById('options'),
    optionButtons: document.querySelectorAll('.option'),
    feedbackElement: document.getElementById('feedback'),
    nextWordButton: document.getElementById('next-word'),
    resultElement: document.getElementById('result'),
    resultButtonsContainer: document.getElementById('result-buttons'),
    restartButton: document.getElementById('restart'),
    reviewWrongButton: document.getElementById('review-wrong')
};

// 초기 상태: 로딩 전 시작 버튼 비활성화
domElements.startButton.disabled = true;

// JSON에서 단어 불러오기
async function loadWords() {
    try {
        const res = await fetch('data/words.json');
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Invalid words.json format: expected array');
        words = data;
        console.log('단어 로드 완료: data/words.json');
    } catch (err) {
        console.warn('단어 로드 실패, 기본 예시 단어 사용', err);
        // fetch 실패 시 기본 예시 단어로 대체
        words = defaultWords;
        // (선택) 사용자에게 간단히 알림
        // alert('단어 로드 실패: 로컬 파일로 열었거나 서버가 필요합니다. 기본 예시 단어로 시작합니다. 로컬 서버에서 실행하려면 PowerShell에서: python -m http.server 5500');
    } finally {
        domElements.startButton.disabled = false;
        // currentWords 초기화(필요 시)
        currentWords = [...words];
    }
}

loadWords();

// 단어를 읽어주는 함수
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // 영어(미국)로 설정
        speechSynthesis.speak(utterance);
    } else {
        console.log("이 브라우저는 SpeechSynthesis API를 지원하지 않습니다.");
    }
}

// 단어 섞기 함수
function shuffleWords(wordsArray) {
    return [...wordsArray].sort(() => Math.random() - 0.5);
}

// 진행 상황 업데이트 함수
function updateProgress() {
    if (currentWords.length === 0) {
        domElements.progressText.textContent = `진행 상황: 0 / 0`;
        domElements.progressBar.style.width = `0%`;
        return;
    }
    domElements.progressText.textContent = `진행 상황: ${currentIndex + 1} / ${currentWords.length}`;
    const progressPercentage = ((currentIndex + 1) / currentWords.length) * 100;
    domElements.progressBar.style.width = `${progressPercentage}%`;
}

// 결과 표시 함수
function showResult() {
    isQuizActive = false;
    const percentage = (correctCount / currentWords.length) * 100;
    domElements.resultElement.textContent = `테스트 완료! 맞춘 단어: ${correctCount} / ${currentWords.length} (${percentage.toFixed(2)}%)`;
    domElements.resultElement.style.display = 'block';
    domElements.resultButtonsContainer.style.display = 'block';
    domElements.optionsContainer.style.display = 'none';
    domElements.feedbackElement.textContent = '';
    domElements.wordElement.style.display = 'none';
    domElements.speakWordButton.style.display = 'none';
    domElements.exampleElement.style.display = 'none';
    domElements.explanationElement.style.display = 'none';
    domElements.nextWordButton.style.display = 'none';
}

// 선택지 생성 함수
function generateOptions(correctWord) {
    const options = [correctWord.meaning];
    const allOtherWords = words.filter(w => w.meaning !== correctWord.meaning);
    const additionalOptionsNeeded = 2;

    if (allOtherWords.length < additionalOptionsNeeded) {
        allOtherWords.forEach(word => options.push(word.meaning));
        const dummyOptions = ["다른 뜻", "또 다른 의미", "기타 뜻"];
        for (let i = 0; options.length < 3; i++) {
            const dummyOption = dummyOptions[i % dummyOptions.length];
            if (!options.includes(dummyOption)) {
                options.push(dummyOption);
            }
        }
    } else {
        const shuffledWords = shuffleWords(allOtherWords);
        for (let i = 0; i < additionalOptionsNeeded; i++) {
            options.push(shuffledWords[i].meaning);
        }
    }

    const shuffledOptions = shuffleWords(options);
    shuffledOptions.push("정확히 모르겠음.");
    return shuffledOptions;
}

// 답변 확인 함수
function checkAnswer(selectedButton, correctMeaning) {
    if (!isQuizActive) return;

    domElements.optionButtons.forEach(button => {
        button.onclick = null;
        if (button.textContent === correctMeaning) {
            button.classList.add('correct');
        }
        if (button === selectedButton && button.textContent !== correctMeaning) {
            button.classList.add('incorrect');
            if (!wrongAnswers.some(item => item.word === currentWords[currentIndex].word)) {
                wrongAnswers.push(currentWords[currentIndex]);
            }
        }
    });

    const feedbackMessage = selectedButton.textContent === correctMeaning ? "정답입니다!" : "틀렸습니다.";
    domElements.feedbackElement.textContent = feedbackMessage;
    domElements.feedbackElement.style.color = feedbackMessage === "정답입니다!" ? "green" : "red";
    if (selectedButton.textContent === correctMeaning) correctCount++;
    domElements.nextWordButton.style.display = 'block';
}

// 다음 단어로 넘어가는 함수
function nextWord() {
    if (!isQuizActive) return;

    currentIndex++;
    if (currentIndex < currentWords.length) {
        updateProgress();
        initQuiz();
    } else {
        showResult();
    }
}

// 퀴즈 초기화 함수
function initQuiz() {
    if (!isQuizActive) return;

    const currentWord = currentWords[currentIndex];
    domElements.wordElement.textContent = currentWord.word;
    domElements.exampleElement.textContent = `예문: ${currentWord.example}`;
    domElements.explanationElement.textContent = `설명: ${currentWord.explanation}`;
    domElements.speakWordButton.style.display = 'block'; // 발음 듣기 버튼 표시

    const options = generateOptions(currentWord);
    domElements.optionButtons.forEach((button, index) => {
        button.textContent = options[index];
        button.classList.remove('correct', 'incorrect');
        button.style.display = 'block';
        button.onclick = () => checkAnswer(button, currentWord.meaning);
    });
    domElements.feedbackElement.textContent = '';
    domElements.nextWordButton.style.display = 'none';
}

// 테스트 시작 함수
function startTest() {
    shuffledWords = shuffleWords(words);
    currentWords = [...shuffledWords];
    currentIndex = 0;
    correctCount = 0;
    wrongAnswers = [];
    isQuizActive = true;

    domElements.startButton.style.display = 'none';
    domElements.progressText.style.display = 'block';
    domElements.progressBarContainer.style.display = 'block';
    domElements.wordElement.style.display = 'block';
    domElements.speakWordButton.style.display = 'block';
    domElements.exampleElement.style.display = 'block';
    domElements.explanationElement.style.display = 'block';
    domElements.optionsContainer.style.display = 'block';
    domElements.resultElement.style.display = 'none';
    domElements.resultButtonsContainer.style.display = 'none';

    updateProgress();
    initQuiz();
}

// 틀린 문제만 보기 함수
function reviewWrongAnswers() {
    if (wrongAnswers.length === 0) {
        alert("틀린 문제가 없습니다!");
        startTest();
        return;
    }

    currentWords = shuffleWords([...wrongAnswers]);
    wrongAnswers = [];
    currentIndex = 0;
    correctCount = 0;
    isQuizActive = true;

    domElements.resultElement.style.display = 'none';
    domElements.resultButtonsContainer.style.display = 'none';
    domElements.wordElement.style.display = 'block';
    domElements.speakWordButton.style.display = 'block';
    domElements.exampleElement.style.display = 'block';
    domElements.explanationElement.style.display = 'block';
    domElements.optionsContainer.style.display = 'block';

    updateProgress();
    initQuiz();
}

// 이벤트 리스너 등록
function initEventListeners() {
    domElements.startButton.onclick = startTest;
    domElements.restartButton.onclick = startTest;
    domElements.reviewWrongButton.onclick = reviewWrongAnswers;
    domElements.nextWordButton.onclick = nextWord;

    // 발음 듣기 버튼 클릭 시 단어 읽기
    domElements.speakWordButton.onclick = () => {
        if (isQuizActive) {
            speakWord(currentWords[currentIndex].word);
        }
    };
}

// 초기화
initEventListeners();