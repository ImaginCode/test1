// JavaScript source code
const messageList = document.querySelector(".chat-box");
const input = document.querySelector(".chat-input input");
const sendButton = document.querySelector(".chat-input button");

// Dictionary to store fixed responses for specific questions
const fixedResponses = {
    "ماذا يُقدم تطبيق اجازتك سعوديه؟": [
        "ماذا يُقدم تطبيق اجازتك سعوديه؟",
        "يُقدم تطبيقات الخدمات السياحيه الممتازه و يُقدم تطبيق للحجوزات على جميع مناطق المملكه العربيه السعوديه و يُقدم طُرُق لتسهيل اجراءات السفر الى المملكة العربية السعوديه",
    ],
    "ما هو الهدف من تصميم تطبيق اجازتك سعوديه؟": [
        "ما هو الهدف من تصميم تطبيق اجازتك سعوديه؟",
        "هو موقع يهدف لتطوير سرعة البحث عن الأماكن السياحية والفعاليات الموسمية في السعودية مع تبسيط طريقة البحث والوصول للمعلومة المطلوبة",
    ],
    "كيف تم تفعيل الذكاء الاصطناعي في موقع اجازتك سعوديه؟": [
        "كيف تم تفعيل الذكاء الاصطناعي في موقع اجازتك سعوديه؟",
        "تم تفعيل الذكاء الاصطناعي في اجازتك سعوديه بانشاء محادثه بين طرفين كما هو ظاهر لكم باستخدام تقنيات الذكاء الاصطناعي وتم تفعيل الذكاء الاصطناعي الافتراضي في رؤية معالم المملكة العربية السعوديه",
    ],
    "ما هي اللغات المستخدمه في برمجة موقع(اجازتك سعوديه)؟": [
        "ما هي اللغات المستخدمه في برمجة موقع(اجازتك سعوديه)؟",
        "اللغات المستخدمه في البرمجه الموقع هي  java script  html css",
    ],
    "لماذا تم اختيار تصميم موقع سياحي؟": [
        "لماذا تم اختيار تصميم موقع سياحي؟",
        "لهدف الرئيسي من تصميم موقع سياحي هو إلهام الزوار في المستقبل وإثارة رغبتهم في زيارة العديد من الوجهات السياحية التي تقدمها مملكتنا ،حيث قمنا بدمج موقعنا مع المنصات الشريكة لتشجيع الزوار على الانتقال إلى المواقع لإجراء الحجوزات مباشرة."
    ],
    "ما هو السبب في استخدام اللون البنفسجي في تصميم الموقع السياحي؟": [
        "ما هو السبب في استخدام اللون البنفسجي في تصميم الموقع السياحي؟",
        "ويجمع اللون البنفسجي بين ألوان عدة ومدلولات غير مباشرة، فضلاً عن البيئات المختلفة، ولكل لون وبيئة معانٍ خاصة، فهذا اللون يشير إلى صحارى المملكة مترامية الأطراف، كما يشير إلى هِضابها خلال فصل الربيع، عندما تتزيّن بلون زهرة الخزامى، ونباتات أخرى مثل  الريحان، التي تُشكّل في مجموعها غطاءً طبيعيًا بلون بنفسجي، تمنحه الطبيعة للإنسان، منظرًا جميلاً يستوقف الناظرين",
    ],
    "ما هو الهدف من تصميم تطبيق اجازتك سعوديه؟": [
        "ما هو الهدف من تصميم تطبيق اجازتك سعوديه؟",
        "هو موقع يهدف لتطوير سرعة البحث عن الأماكن السياحية والفعاليات الموسمية في السعودية مع تبسيط طريقة البحث والوصول للمعلومة المطلوبة",
    ],
    "مرحبا": [
        "مرحبا",
        "مرحبًا! كيف يمكنني مساعدتك؟",
    ]
    // يمكنك إضافة المزيد من الأسئلة والأجوبة هنا
};

sendButton.addEventListener("click", function () {
    const question = input.value.trim();
    if (question !== "") {
        displayUserMessage(question);
        displayBotMessage(getBotResponse(question));
        input.value = ""; // Clear input field
    }
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});

function displayUserMessage(message) {
    const userMessage = createMessageElement(message, "user-message");
    messageList.appendChild(userMessage);
    scrollToBottom();
}

function displayBotMessage(message) {
    const botMessage = createMessageElement(message, "bot-message");
    messageList.appendChild(botMessage);
    scrollToBottom();
}

function createMessageElement(messageContent, messageType) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", messageType);
    messageElement.innerHTML = `<div class="chat-message-text">${messageContent}</div>`;
    return messageElement;
}

function scrollToBottom() {
    messageList.scrollTop = messageList.scrollHeight;
}

function getBotResponse(question) {
    // Check if the question has a fixed response
    if (fixedResponses.hasOwnProperty(question)) {
        // Return the fixed response for this question
        return fixedResponses[question][1]; // We're returning the second item of the array (the answer)
    } else {
        // If there is no fixed response, return a default response
        return "ليس لدي إجابة لذلك. هل يمكنك محاولة طرح شيء آخر؟";
    }
}