/*
 * XPDevs Learn-Munhwao
 * Advanced curriculum expansion
 *
 * Tiers 21-30
 * 160 structured lesson drafts
 *
 * These are curriculum drafts, not independently
 * linguistically verified teaching chapters.
 */

(function () {
    "use strict";

    var MH = window.MH;

    if (!MH || !Array.isArray(MH.TIERS) || !Array.isArray(MH.LESSONS)) {
        console.error("Learn-Munhwao: base curriculum was not loaded.");
        return;
    }

    if (window.__MUNHWAO_ADVANCED_LOADED) {
        console.warn("Advanced curriculum already loaded.");
        return;
    }

    window.__MUNHWAO_ADVANCED_LOADED = true;

    var tiers = [
        {
            id: 21,
            color: "blue",
            title: "Advanced Noun Phrases",
            desc: "Detailed noun phrases, modifiers and complex descriptions.",
            lessons: [
                "Noun Phrase Foundations",
                "Describing Nouns with Adjectives",
                "Demonstratives and Reference",
                "Possessive Constructions",
                "Relative Clauses: Introduction",
                "Relative Clauses: Practice",
                "Noun Modification with Verbs",
                "Nominalisation Foundations",
                "Nominalisation in Context",
                "Compound Nouns",
                "Abstract Nouns",
                "Quantifiers and Scope",
                "Classifier Review",
                "Complex Topic Marking",
                "Long Noun Phrase Reading",
                "Advanced Noun Phrase Assessment"
            ]
        },
        {
            id: 22,
            color: "purple",
            title: "Sentence Connections and Logic",
            desc: "Reasons, conditions, contrast, sequence and consequences.",
            lessons: [
                "Connecting Two Sentences",
                "Sequence and Chronology",
                "Expressing Reasons",
                "Expressing Consequences",
                "Conditional Sentences",
                "Contrasting Ideas",
                "Concession and Qualification",
                "Purpose and Intention",
                "Cause and Effect",
                "Explaining Arguments",
                "Combining Multiple Clauses",
                "Complex Sentence Reading",
                "Sentence Boundary Analysis",
                "Logical Connectors in Context",
                "Paragraph Reconstruction",
                "Sentence Connection Assessment"
            ]
        },
        {
            id: 23,
            color: "green",
            title: "Register, Formality and Respect",
            desc: "Formal, polite, familiar and institutional language.",
            lessons: [
                "Understanding Language Register",
                "Formal Speech Review",
                "Polite Requests",
                "Giving Instructions",
                "Respectful Reference",
                "Honorific Verb Constructions",
                "Institutional Language",
                "Public Notices",
                "Formal Introductions",
                "Writing Formal Messages",
                "Conversational Register",
                "Choosing Appropriate Endings",
                "Register in Written Texts",
                "Communication Situations",
                "Register Correction Exercises",
                "Register Assessment"
            ]
        },
        {
            id: 24,
            color: "orange",
            title: "Reported Speech and Information",
            desc: "Reporting statements, questions and information.",
            lessons: [
                "Reporting Statements",
                "Reporting Questions",
                "Reporting Requests",
                "Reporting Instructions",
                "Reported Speech Foundations",
                "Reported Speech in Context",
                "Expressing Uncertainty",
                "Expressing Confidence",
                "Attributing Information",
                "Quoting Written Sources",
                "Summarising Conversations",
                "Reporting Past Events",
                "Reported Information in News",
                "Distinguishing Fact and Opinion",
                "Complex Information Reporting",
                "Reported Speech Assessment"
            ]
        },
        {
            id: 25,
            color: "red",
            title: "Advanced Reading",
            desc: "Longer and more demanding North Korean texts.",
            lessons: [
                "Reading Longer Paragraphs",
                "Identifying Main Ideas",
                "Finding Supporting Details",
                "Understanding Context",
                "Reading Descriptive Texts",
                "Reading Explanatory Texts",
                "Reading Historical Texts",
                "Reading Institutional Texts",
                "Reading Newspaper Reports",
                "Reading Editorial Language",
                "Understanding Implied Meaning",
                "Identifying Author Purpose",
                "Vocabulary from Context",
                "Analysing Sentence Structure",
                "Advanced Reading Practice",
                "Advanced Reading Assessment"
            ]
        },
        {
            id: 26,
            color: "teal",
            title: "Advanced Writing",
            desc: "Paragraphs, extended writing and editing.",
            lessons: [
                "Writing Clear Sentences",
                "Building a Paragraph",
                "Paragraph Organisation",
                "Descriptive Writing",
                "Narrative Writing",
                "Explanatory Writing",
                "Writing Instructions",
                "Writing Formal Messages",
                "Writing Summaries",
                "Writing Comparisons",
                "Writing Opinions",
                "Supporting an Argument",
                "Editing Grammar",
                "Editing Vocabulary",
                "Writing Multi-Paragraph Texts",
                "Advanced Writing Assessment"
            ]
        },
        {
            id: 27,
            color: "pink",
            title: "Vocabulary Depth and Precision",
            desc: "Meaning, context, word formation and precise vocabulary.",
            lessons: [
                "Synonyms and Meaning",
                "Differences Between Similar Words",
                "Antonyms and Contrast",
                "Word Families",
                "Prefixes and Suffixes",
                "Word Formation",
                "Formal Vocabulary",
                "Everyday Vocabulary",
                "Institutional Vocabulary",
                "Technical Vocabulary",
                "Abstract Vocabulary",
                "Idiomatic Expressions",
                "Fixed Expressions",
                "Vocabulary in Context",
                "Vocabulary Selection",
                "Vocabulary Assessment"
            ]
        },
        {
            id: 28,
            color: "gold",
            title: "Translation and Interpretation",
            desc: "Preserving meaning, structure, tone and context.",
            lessons: [
                "Translation Foundations",
                "Word-for-Word Translation Problems",
                "Translating Simple Sentences",
                "Translating Complex Sentences",
                "Preserving Meaning",
                "Translating Formal Language",
                "Translating Conversational Language",
                "Translating Descriptions",
                "Translating Instructions",
                "Translating Paragraphs",
                "Handling Ambiguity",
                "Choosing Natural English",
                "Choosing Accurate Korean",
                "Translation Editing",
                "Extended Translation Practice",
                "Translation Assessment"
            ]
        },
        {
            id: 29,
            color: "blue",
            title: "Independent Language Use",
            desc: "Independent reading, writing and communication.",
            lessons: [
                "Independent Reading Strategy",
                "Independent Vocabulary Research",
                "Using Dictionary Entries",
                "Understanding Grammar References",
                "Reading Unfamiliar Texts",
                "Writing Without Sentence Templates",
                "Describing Complex Situations",
                "Explaining Processes",
                "Expressing Detailed Opinions",
                "Summarising Information",
                "Organising Longer Conversations",
                "Responding to Questions",
                "Correcting Your Own Writing",
                "Identifying Your Own Errors",
                "Independent Language Project",
                "Independent Use Assessment"
            ]
        },
        {
            id: 30,
            color: "purple",
            title: "Advanced Mastery and Final Assessment",
            desc: "Integrated reading, writing, grammar and translation.",
            lessons: [
                "Comprehensive Grammar Review",
                "Comprehensive Vocabulary Review",
                "Advanced Reading Examination",
                "Advanced Writing Examination",
                "Complex Sentence Examination",
                "Translation Examination",
                "Reading an Extended Text",
                "Writing an Extended Text",
                "Analysing Language Choices",
                "Explaining Grammatical Decisions",
                "Editing a Full Text",
                "Independent Research Exercise",
                "Extended Reading Portfolio",
                "Extended Writing Portfolio",
                "Final Integrated Assessment",
                "Final Language Portfolio"
            ]
        }
    ];

    var examples = [
        {
            h: "저는 책을 읽습니다.",
            e: "I read a book.",
            note: "Topic marking and an object-marked noun."
        },
        {
            h: "학생이 학교에 갑니다.",
            e: "The student goes to school.",
            note: "Subject marking and a destination."
        },
        {
            h: "오늘은 날씨가 좋습니다.",
            e: "The weather is good today.",
            note: "Topic and subject marking."
        },
        {
            h: "책을 읽고 글을 씁니다.",
            e: "I read a book and write a text.",
            note: "Connecting actions with 고."
        },
        {
            h: "시간이 없어서 가지 못합니다.",
            e: "I cannot go because I have no time.",
            note: "Reason and inability."
        },
        {
            h: "시간이 있으면 공부하겠습니다.",
            e: "If I have time, I will study.",
            note: "A conditional construction."
        },
        {
            h: "무엇을 하고 있습니까?",
            e: "What are you doing?",
            note: "A formal question."
        },
        {
            h: "그 사람이 왔다고 들었습니다.",
            e: "I heard that the person came.",
            note: "Reported information."
        }
    ];

    /*
     * Verify that all tiers have exactly 16 topics.
     */

    tiers.forEach(function (tier) {
        if (tier.lessons.length !== 16) {
            throw new Error("Incorrect lesson count in tier " + tier.id);
        }

        if (MH.TIERS.some(function (existing) {
            return existing.id === tier.id;
        })) {
            throw new Error("Tier already exists: " + tier.id);
        }
    });

    var nextId = 141;

    tiers.forEach(function (tier) {

        MH.TIERS.push({
            id: tier.id,
            color: tier.color,
            title: tier.title,
            desc: tier.desc
        });

        tier.lessons.forEach(function (title, index) {

            var example = examples[(index + tier.id) % examples.length];

            MH.LESSONS.push({
                id: nextId++,
                tier: tier.id,
                title: title,

                desc:
                    "Advanced curriculum draft: " + title +
                    ". Study the objective, analyse the example, " +
                    "complete the practice and produce an independent response.",

                grammar: {
                    g: true,
                    title: title,
                    body:
                        "This is a structured lesson draft. " +
                        "It introduces the topic and provides a starting " +
                        "point for independent practice. The North Korean " +
                        "specific rules for this topic must be verified " +
                        "before this lesson is published as complete.",

                    lines: [
                        "Identify the language feature being studied.",
                        "Read the example carefully.",
                        "Identify the components of the sentence.",
                        "Explain how the sentence communicates its meaning.",
                        "Write a new example using the same structure.",
                        "Check spelling and vocabulary against a reliable reference."
                    ]
                },

                learn: [
                    {
                        h: example.h,
                        e: example.e,
                        n: example.note,
                        s: "Read the sentence and explain its structure.",
                        k: "example-" + nextId
                    },
                    {
                        h: "",
                        e: "Independent analysis",
                        n: "Explain the main language feature in your own words.",
                        s: "Write an explanation and construct your own example.",
                        k: "analysis-" + nextId
                    },
                    {
                        h: "",
                        e: "Independent production",
                        n: "Apply the lesson topic to a new sentence or paragraph.",
                        s: "Produce your own work without copying the example.",
                        k: "production-" + nextId
                    }
                ],

                status: "draft"
            });

        });

    });

    console.info(
        "Learn-Munhwao expansion loaded:",
        tiers.length,
        "tiers;",
        nextId - 141,
        "lesson drafts."
    );

})();
