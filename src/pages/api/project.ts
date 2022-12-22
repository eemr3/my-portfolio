// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Method not allowed' });
  }
  try {
    const projects = await prisma.projects.create({
      data: req.body,
    });
    return res.status(201).json(projects);
  } catch (err) {
    console.log('from API error', err);
    res.status(400).json({ message: err.message });
  }
}
