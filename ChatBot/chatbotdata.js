export const chatbotData = [
    {
        keywords: ["안녕", "하이", "반가워", "ㅎㅇ"],
        answer: "안녕하세요! 무엇을 도와드릴까요?"
    },
    {
        keywords: ["시간", "몇시", "지금"],
        answer: () => `현재 시각은 ${new Date().toLocaleTimeString("ko-KR")}입니다.`
    },
    {
        keywords: ["이름", "누구"],
        answer: "저는 김고 챗봇이에요!"
    },
    {
        keywords: ["고마워", "감사", "땡큐"],
        answer: "언제든지요 😊"
    },
    {
        keywords: ["잘자", "굿나잇"],
        answer: "좋은 꿈 꾸세요 🌙"
    }
    ,
    {
        keywords: ["제일", "좋은", "선생님"],
        answer: "당연히 천성희 쎔이죠"
    }


];