import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message =async(req,res)=>{
    try{
        const {text}= req.body;
        if(!text?.trim()){
            return res.status(400).json({error:"Message cannot be empty"});
        }
        const user =await User.create({
            sender:"user",
            text
        })
        //Data
        const botResponses = {
            "hello": "Hello! How can I help you?",
  "hi": "Hi there! What’s up?",
  "hey": "Hey! Need anything?",
  "good morning": "Good morning! How’s your day going?",
  "good afternoon": "Good afternoon! How can I assist?",
  "good evening": "Good evening! What can I do for you?",
  "greetings": "Greetings! How can I assist you today?",

  "how are you": "I'm doing great! How are you?",
  "how's it going": "All good here! What about you?",
  "what's up": "Not much, I'm here to help you!",
  
  "who are you": "I'm ChatBot, your virtual assistant.",
  "what is your name": "I'm ChatBot, here to help you.",
  "where are you from": "I exist in your device and the internet.",
  "who made you": "I was created by developers to help users.",
  
  "thank you": "You're welcome!",
  "thanks": "Anytime!",
  "thank you so much": "You're very welcome!",
  
  "bye": "Goodbye! Have a nice day!",
  "goodbye": "See you later!",
  "see you": "See you soon!",
  "take care": "Take care!",

  "tell me a joke": "Why did the computer go to the doctor? Because it had a virus!",
  "another joke": "What do robots do after a fight? They reboot!",
  "funny joke": "Why don’t eggs tell jokes? They’d crack each other up!",
  
  "tell me something": "Sure! Ask me anything.",
  "tell me a story": "Once, a curious user created a chatbot and learned a lot!",
  "tell me a fact": "Fact: The Eiffel Tower can be 15 cm taller during hot days.",
  
  "give me a fun fact": "Fun fact: A day on Venus is longer than a year on Venus.",
  "interesting fact": "Interesting fact: Octopuses have three hearts.",
  
  "what can you do": "I can answer questions, chat, and help with information.",
  "how do you work": "I process text and reply based on what I learned.",
  "can you help me": "Of course! What do you need?",
  
  "i'm bored": "Maybe try something fun — music, a walk, or ask me a fact!",
  "i am tired": "A short break or some water might help.",
  "i am stressed": "Try taking a deep breath — it can calm your mind.",
  
  "what time is it": "I can’t see a clock, but your device knows the time.",
  "what day is it": "Your calendar should know! I believe it’s today.",
  "what's the date": "Your device date system can tell you that.",
  
  "where am i": "I can't see your location, but you should be somewhere nice!",
  
  "how old are you": "I don’t have an age — I’m software!",
  "do you eat": "Nope, I only run on code.",
  "do you sleep": "I never sleep! I'm always ready to help.",
  
  "are you real": "As software — yes! As a human — no.",
  "do you have feelings": "No, but I can understand your questions.",
  "do you think": "I simulate thinking to help you.",
  
  "sing me a song": "I can't sing, but I can give you lyrics info!",
  "do you know music": "I can talk about music, although I can't hear it.",
  
  "do you know math": "Yes! Ask me any simple calculation.",
  "can you count": "Of course! Try me.",
  "what is 2+2": "2 + 2 = 4.",
  
  "give me advice": "Let me know the topic and I’ll try to help.",
  "help me decide": "Tell me your options and I’ll help you choose.",
  
  "do you have friends": "I interact with many users — so kind of!",
  "who is your boss": "You are, since you're using me!",
  
  "repeat after me": "Sure! Tell me what to repeat.",
  
  "tell me a riddle": "What has to be broken before you can use it? An egg!",
  "another riddle": "What has keys but can’t open doors? A piano!",
  
  "do you like sports": "I don't play sports, but I can talk about them!",
  "what is your favorite sport": "I don’t have favorites, but many like football.",
  
  "do you like movies": "I can’t watch movies, but I can discuss them!",
  
  "what is life": "A deep question! Many people have different answers.",
  "what is the meaning of life": "Different people define it in different ways.",
  
  "i am sad": "I'm sorry to hear that. Talking about it might help.",
  "i am happy": "That's great! I'm glad you're feeling good.",
  "i am excited": "Nice! What’s happening?",
  
  "good job": "Thank you!",
  "awesome": "Glad you think so!",
  "nice": "Thanks!",
  "cool": "Cool indeed!",
  
  "what language do you speak": "I mainly use English, but can understand others.",
  "can you learn": "In a way, yes! I get better over time.",
  
  "how smart are you": "Smart enough to help with everyday stuff!",
  "are you intelligent": "I'm designed to give helpful responses.",
  
  "do you have a family": "Not really — I'm just software.",
  "do you have a body": "No physical body — just code!",
  
  "can you see me": "No, I can't see anything.",
  "can you hear me": "No, I can only read your messages.",
  
  "what is your favorite color": "I don’t have personal preferences.",
  "what is your favorite food": "I don't eat, but I hear pizza is popular!",
  
  "do you know the weather": "I can’t check weather, but your phone can.",
  
  "make me laugh": "Here’s one: Why don’t robots panic? They have nerves of steel!",
  
  "tell me something cool": "Cool fact: Sharks existed before trees!",
  
  "who is the president": "You can check the latest information online.",
  
  "do you know geography": "I know some basics! Ask me!",
  
  "what is earth": "Earth is the planet we live on.",
  
  "do you know science": "I can explain simple science topics!",
  
  "can you explain": "Sure! Tell me what you need explained.",
  
  "help me study": "Tell me the subject and I'll try to assist.",
  
  "i need information": "What topic are you interested in?",
  
  "what is technology": "Technology is the use of tools, machines, and software to solve problems.",
  
  "how does wifi work": "WiFi uses radio waves to send data wirelessly.",
  
  "what is the internet": "A huge global network that connects computers and devices.",
  
  "explain AI": "AI is software designed to mimic human-like thinking tasks.",
  
  "give me motivation": "Small steps every day make a big difference.",
  
  "i am nervous": "Try taking a few deep breaths — it can help.",
  
  "tell me a quote": "Here’s one: 'The best way to predict the future is to create it.'",
  
  "surprise me": "Here's a fun fact — sloths can hold their breath longer than dolphins!",
  
  "teach me something": "Did you know your brain uses about 20% of your body's energy?",
  
  "what is your mission": "To help you with answers and conversations!",
  
  "do you get tired": "Never! I'm always ready.",
  
  "can you glitch": "Hopefully not! I try my best to run smoothly.",
  
  "who uses you": "Anyone who wants a helpful chat assistant!",
  
  "are you dangerous": "No, I’m just text-based software.",
  
  "do you know jokes": "Lots of them! Want more?",
  
  "i feel lonely": "Talking can help. I'm here to chat.",
  
  "teach me a word": "Sure! 'Curiosity' — wanting to learn something.",
  
  "what is your favorite animal": "I don't have favorites, but dogs and cats are very popular!",
  
  "can you give instructions": "Yes! Tell me what you need help with.",
  
  "do you have hobbies": "Helping users is what I do best!",
  
  "how do you chat": "I process your message and generate a response.",
  
  "what is your power": "Fast responses and lots of information!"
        }
    
    const normalizedText = text.toLowerCase().trim();
    const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";
    const bot = await Bot.create({
        text: botResponse
    })
    return res.status(200).json({
        userMessage:user.text,
        botMessage:bot.text,
    })
    }catch(error){
        console.log("Error in Message Controller:", error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}