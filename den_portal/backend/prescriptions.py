import nltk
from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize

def get_synonyms(word):
    synonyms = set()
    for syn in wordnet.synsets(word):
        for lemma in syn.lemmas():
            synonyms.add(lemma.name())
    return list(synonyms)

def get_response(question):
    tokens = word_tokenize(question.lower())
    keywords = [word for word in tokens if word not in nltk.corpus.stopwords.words('english')]
    synonyms = []
    for keyword in keywords:
        synonyms.extend(get_synonyms(keyword.lower()))
    keywords.extend(synonyms)
    if 'toothache' in keywords or 'ache' in keywords:
        return """Toothache can be caused by a variety of factors such as tooth decay, gum disease, or a dental injury. It is best to consult with a dentist to determine the cause of your toothache and receive proper treatment.
                    There are different types of drugs that can be used for toothache, depending on the severity of the pain and the underlying cause. Here are some common options:
                    Over-the-counter pain relievers:

                    Acetaminophen (Tylenol)
                    Ibuprofen (Advil, Motrin)
                    Naproxen (Aleve)
                    Prescription pain relievers:

                    Codeine
                    Oxycodone
                    Hydrocodone
                    Topical oral analgesics:

                    Benzocaine (Orajel, Anbesol)
                    Lidocaine (Xylocaine)
                    Antibiotics (if there is an infection):

                    Amoxicillin
                    Clindamycin
                    Metronidazole
                                        """
    elif 'sensitive' in keywords:
        return """Desensitizing Toothpaste: If a patient has sensitive teeth, the dentist may recommend using a desensitizing toothpaste containing ingredients like potassium nitrate, stannous fluoride or strontium chloride to reduce the sensitivity.
                    Example prescription: Use a pea-sized amount of desensitizing toothpaste twice daily for 2-3 weeks.
                """
    
    elif 'tooth' in keywords or 'whiten' in keywords:
        return """There are several ways to whiten teeth such as over-the-counter whitening products, professional dental treatments, or natural remedies. It is best to consult with a dentist to determine the best whitening option for you.
                    Example prescription: Apply the hydrogen peroxide gel to the custom-fitted trays provided by the dentist and wear them for 30 minutes every day for 2 weeks.
                """
    elif "damaged" in keywords:
        return """Root Canal Therapy: If a patient has an infected or damaged tooth, the dentist may perform a root canal procedure to remove the infected pulp and restore the tooth.
                    Example prescription: Take ibuprofen 600mg every 6 hours for 2-3 days after the procedure to manage any pain or discomfort."""

    elif "Braces" or "" in keywords:
        return "Braces: Braces are used to straighten teeth and correct bite issues. They may cause discomfort and require frequent adjustments, but they can improve dental health and aesthetics in the long run."
    
    else:
        return "I'm sorry, I don't understand your question."

def make_prescriptions(question):
 
    response = get_response(question)
    return (response)
