import fs from 'fs';
import path from 'path';

interface SubscriptionRequest {
  email: string;
}

interface SubscriptionResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getSubscribersPath(): string {
  return path.join('/tmp', 'subscribers.json');
}

function getSubscribers(): string[] {
  try {
    const filePath = getSubscribersPath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading subscribers:', error);
  }
  return [];
}

function addSubscriber(email: string): void {
  try {
    const filePath = getSubscribersPath();
    const subscribers = getSubscribers();

    if (!subscribers.includes(email)) {
      subscribers.push(email);
      fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
    }
  } catch (error) {
    console.error('Error saving subscriber:', error);
    throw new Error('Failed to save subscription');
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    // Verify request method
    if (req.method !== 'POST') {
      return Response.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Parse request body
    const body: SubscriptionRequest = await req.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!validateEmail(trimmedEmail)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const subscribers = getSubscribers();
    if (subscribers.includes(trimmedEmail)) {
      return Response.json(
        { message: 'Email already subscribed' },
        { status: 200 }
      );
    }

    // Add subscriber
    addSubscriber(trimmedEmail);

    return Response.json(
      { success: true, message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return Response.json(
      { error: 'An error occurred while processing your subscription' },
      { status: 500 }
    );
  }
}
