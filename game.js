// OpenAI API를 호출하여 탐사 정보를 얻는 함수
async function startExploration() {
    const prompt = "사용자가 광물을 탐사하려고 합니다. 어떤 광물을 추천하시겠습니까?";
    
    // OpenAI API 호출
    const response = await callOpenAIAPI(prompt);

    // 응답 결과를 HTML에 표시
    document.getElementById('response').innerText = response;
}

// OpenAI API를 호출하여 시장 분석을 요청하는 함수
async function analyzeMarket() {
    const prompt = "현재 시장 상황에서 언제 광물을 판매하는 것이 좋을까요?";

    // OpenAI API 호출
    const response = await callOpenAIAPI(prompt);

    // 응답 결과를 HTML에 표시
    document.getElementById('market-response').innerText = response;
}

// OpenAI API와 상호작용하는 함수
async function callOpenAIAPI(prompt) {
    const apiKey = 'sk-z-vWmm-B0LyrBvDENU3KqsgYvn_OwaeaBDbZ59zH1UT3BlbkFJAJA_lE1pVh9L5m6mQ0mPsFlA2MUZlDS7ajuZhO2NYA';  // OpenAI API 키
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",  // 사용할 모델 (gpt-3.5-turbo도 사용 가능)
            prompt: prompt,
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
