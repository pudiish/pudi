import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Submits a contact form to Firebase Firestore
 * @param {Object} formData - The form data containing firstName, lastName, email, and message
 * @returns {Promise<Object>} - Returns success status and message
 */
export const submitContactForm = async (formData) => {
  try {
    // Add document to Firestore 'contacts' collection
    const docRef = await addDoc(collection(db, "contacts"), {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      message: formData.message.trim(),
      timestamp: serverTimestamp(),
      read: false, // Mark as unread for easy filtering in admin
    });

    return {
      success: true,
      message: "Your message has been sent successfully!",
      id: docRef.id,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Error: Unable to send message. Please try again later.",
      error: error.message,
    };
  }
};

