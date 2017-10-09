const questions = [
    { id: 0, question: 'Ngomntinini uyangena kumntonono kodwa umntonono akangeni kumntinini', answers: [{value: 'Isitsha esincane neskhulu', correct: true} ] },
    { id: 1, question: 'Ngenkomo yami ebomvu ehlala esibayeni esimhlophe', answers: [{value: 'Inkomo Nesibaya', correct: true}] },
    { id: 2, question: 'Ngomagxuma azibambele', answers: [{value: 'Iphalishi', correct: true }] },
    { id: 3, question: 'Ngenyoka yami ehamba kuze kuse', answers: [{value: 'Umfula ogelezayo', correct: true }] },
    { id: 4, question: 'Ngento yami ethi hamba ngizokugadela', answers: [{value: 'Ingidi noma ukhiye', correct: true }] },
    { id: 5, question: 'Ngomakoti okuthi uma esezongena emzini akikize', answers: [{value: 'Isitimela', correct: true }] },
    { id: 6, question: 'Ngento yami ehamba imini nobusuku', answers: [{value: 'Amanzi ageleza emfuleni', correct: true }] },
    { id: 7, question: 'Ngomakoti ogiya agiye ajike esangweni abuyele endlini ahlale ngemuva kwesicabha', answers: [{value: 'Umshanelo, uma ushanela', correct: true }] },
    { id: 8, question: 'Ngomama uyasuza izingane ziyabaleka', answers: [{value: 'Isibhamu', correct: true }] },
    { id: 9, question: 'Ngomuntu wami othwele isambulelo esimhlophe', answers: [{value: 'Ikhowa', correct: true }] },
    { id: 10, question: 'Ngentombi yakwethu abayiphenya isidwaba bese beyipheka', answers: [{value: 'Mmbila oyifutho', correct: true }] },
    { id: 11, question: 'Ngomuntu wami othi nyelenyele kazi ngiyozalela kuphi', answers: [{value: 'Ibhece', correct: true }] },
    { id: 12, question: 'Ngezinkabi zona zimile kodwa inqola iyahamba', answers: [{value: 'Uthango', correct: true }] },
    { id: 13, question: 'Ngesibhamu somthukuso', answers: [{value: 'Ubhatata', correct: true }] },
    { id: 14, question: 'Ngenyoni ezalela ofukwini', answers: [{value: 'Intwala', correct: true }] },
    { id: 15, question: 'Ngosikaza usuthu nomadlakazi', answers: [{value: 'Unwabu', correct: true }] },
    { id: 16, question: 'Ngomnumzane ozondana nelanga', answers: [{value: 'Isikhova', correct: true }] },
    { id: 17, question: 'Ngomama wehlathi ozenza ikhehlana', answers: [{value: 'Inkawu', correct: true }] },
    { id: 18, question: 'Ngesitimela sentaba', answers: [{value: 'Ishongololo', correct: true }] },
    { id: 19, question: 'Ngesitimela sami esingenamasondo', answers: [{value: 'Inyoka', correct: true }] },
    { id: 20, question: 'Ngentokazi emabalabala egcogcoma ezimbalini', answers: [{value: 'Uvemvane', correct: true }] },
    { id: 21, question: 'Ngomuntu othi uma ngike ngamubamba ngingamane ngifele kuye', answers: [{value: 'izibonkolo', correct: true }] },
    { id: 22, question: 'Ngesalukazi sami esithi singabona abantu besesikhihliza amagwebu ngenxa yenjabulo', answers: [{value: 'Utshwala lwesintu', correct: true }] },
    { id: 23, question: 'Ngezinsipho ezizeneka zona ziphinde zizibuthe', answers: [{value: 'Izinkanyezi', correct: true }] },
    { id: 24, question: 'Ngamakhosi ami abusa ngokudedelana', answers: [{value: 'Ilanga nenyanga', correct: true }] },
    { id: 25, question: 'Ngoboya eboyeni, Wo! ayive imnandi lento', answers: [{value: 'Ubuthongo', correct: true }] },
    { id: 26, question: 'Ngomama ozala ngezimbambo', answers: [{value: 'Ivovo', correct: true }] },
    { id: 27, question: 'Ngomuntu ohamba ebuza ethi iphi indlela nansi indlela', answers: [{value: 'Isinene nebheshu', correct: true }] },
    { id: 28, question: 'Ngemizi yami emibili eyakhe ngaphansi kwehlathi elimyama', answers: [{value: 'Izindlebe', correct: true }] },
    { id: 29, question: 'Ngemizi emibili eyakhe ngaphansi kwentaba', answers: [{value: 'Amehlo', correct: true }] },
    { id: 30, question: 'Ngomakoti wami okuthi lapho engena emzini, afake ezimhlophe, bese efika esina athi uma eqeda aphelele emahlweni', answers: [{value: 'Ikhandlela', correct: true }] },
    { id: 31, question: 'Ngezimbambo zezwe', answers: [{value: 'Uthayela', correct: true }] },
    { id: 32, question: 'Ngomuntu ohamba ngonyawo olulodwa kuthi lapho ema, ame ngezinyawo ezintathu', answers: [{value: 'Ibhala', correct: true }] },
    { id: 33, question: 'Ngebhodwe elipheka lingatheliwe amanzi', answers: [{value: 'Inqawe', correct: true }] },
    { id: 34, question: 'Ngogogo ohlezi esiceshini nobhoko lwakhe', answers: [{value: 'Inkomishi, isoso ne thispuni', correct: true }] },
    { id: 35, question: 'Ngomahlala ngekhanda abanye behlala ngezinqe', answers: [{value: 'Ithoshi', correct: true }] },
    { id: 36, question: 'Ngomuntu oma ngoba esuthi, nxa elambile ulala phansi', answers: [{value: 'Isaka', correct: true }] },
    { id: 37, question: 'Ngenyoka edla ngomhlubulo, inhlanze ngomhlubulo', answers: [{value: 'Isitimela', correct: true }] },
    { id: 38, question: 'Ngensimu yami elinywa ngezandla ivunwe ngamehlo', answers: [{value: 'Incwadi', correct: true }] },
    { id: 39, question: 'Ngomama uyasuza ingane ziyabaleka', answers: [{value: 'Isibhamu nxa sidubula', correct: true }] },
    { id: 40, question: 'Ngesitimela sentaba', answers: [{value: 'Ishongololo', correct: true }] },
    { id: 41, question: 'Ngomuntu wami othi angaphuza lonke igazi lakhe ebesefa', answers: [{value: 'Isibani sikaphalafini', correct: true }] },
    { id: 42, question: 'Ngesitimela sami esingenamasondo', answers: [{value: 'Inyoka', correct: true }] },
    { id: 43, question: 'Ngensizwa yami egiya iphethe umshiza nobhoko', answers: [{value: 'Iwashi nezinti zalo zombili', correct: true }] },
    { id: 44, question: 'Ngensizwa yami efaka izigqoko zesiliva, kuthi kungaqhamuka inkosi yazo zizikhumule izigqoko', answers: [{value: 'Amazolo', correct: true }] },
    { id: 45, question: 'Ngomuntu omfica edla, angakuniki lutho akuyeke uzithathele', answers: [{value: 'Umfula', correct: true }] },
    { id: 46, question: 'Ngamabutho ami agiya ngenkani impi ilwa', answers: [{value: 'Amathonsi emvula ngenkathi liduma', correct: true }] },
    { id: 47, question: 'Ngenkomazi yami ethi ingakhala bese izisenga', answers: [{value: 'Izulu', correct: true }] },
    { id: 48, question: 'Ngomama umile izingane ziyadansa', answers: [{value: 'Isihlahla', correct: true }] },
    { id: 49, question: 'Ngomngani wami othembekile ongamshiya lapha uphinde umfice khona', answers: [{value: 'Itshe', correct: true }] },
    { id: 50, question: 'Ngomngani okuculela kamnandi kanti ufuna ukukulimaza', answers: [{value: 'Umiyane', correct: true }] },
];

function randomIndex(questionsCopy) {
    return Math.floor(Math.random() * (questionsCopy.length))
}

function getRandomAnswer(questionsCopy) {
    let answer = questionsCopy[randomIndex(questionsCopy)].answers[0];
    answer.correct = false;
    questionsCopy.splice(questionsCopy.indexOf(answer), 1);
    return answer;
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function getCopy(object) {
    return JSON.parse(JSON.stringify(object));
}

export default {
    getRandomQuestion: function () {
        let questionsCopy = JSON.parse(JSON.stringify(questions));
        let question = questionsCopy[randomIndex(questionsCopy)];

        question.answers.push(getRandomAnswer(questionsCopy));
        question.answers.push(getRandomAnswer(questionsCopy));
        shuffle(question.answers);
        return question;
    }
}