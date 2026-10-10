export interface Message {
  id: string;
  sender: 'user' | 'nexus' | 'system';
  text: string;
  timestamp: string;
  emotion?: string;
  agentLog?: AgentLog[];
  reflection?: Reflection;
}

export interface AgentLog {
  agentName: string;
  role: string;
  thought: string;
  timestamp: string;
}

export interface Reflection {
  task: string;
  response_quality: string;
  mistakes: string[];
  lessons: string[];
  improvements: string[];
}

export interface Fact {
  id: string;
  fact: string;
  category: string;
  timestamp: string;
}

export interface Mistake {
  id: string;
  mistake: string;
  context: string;
  correction: string;
  timestamp: string;
}

export interface Lesson {
  id: string;
  lesson: string;
  source: string;
  impact: string;
  timestamp: string;
}

export interface ChatThread {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
}

export interface NexusState {
  chats?: ChatThread[];
  activeChatId?: string;
  shortTermMemory: Message[];
  longTermMemory: Fact[];
  mistakeMemory: Mistake[];
  lessonsLearned: Lesson[];
  reflections: Reflection[];
}

export type TabType =
  | 'home'
  | 'chat'
  | 'voice-link'
  | 'memory'
  | 'knowledge'
  | 'agents'
  | 'learning'
  | 'analytics'
  | 'settings';
