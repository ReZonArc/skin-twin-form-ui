/**  
 * This file contains functions to interact with the Skincare Ingredient Assistant chatbot endpoints.  
 * The backend services are implemented in Python (FastAPI).  
 * @module skincare_react_ingredient_api  
 */

const SKINCARE_REACT_INGREDIENT_API_URL = process.env.NEXT_PUBLIC_SKINCARE_REACT_INGREDIENT_API_URL;

/**  
 * Chatbot Interaction
 */

/**  
 * Sends a message to the Skincare Ingredient Assistant Chatbot and retrieves the response.
 * @param {string} thread_id - The ID of the conversation thread.
 * @param {string} message - The message to send to the chatbot.
 * @throws Will throw an error if the request fails.
 */
export async function sendMessagetoReactAgentIngredientAssistantChatbot(thread_id, message) {

    const payload = {
        thread_id: thread_id,
        message: message
    };
    
    const response = await fetch(`${SKINCARE_REACT_INGREDIENT_API_URL}/ingredient-assistant/send-message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Error sending message to ingredient assistant chatbot: ${response.status}`);
    }

    const data = await response.json();
    return data;
}