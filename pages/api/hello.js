// Serverless Functions (also known as Lambdas)

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello hirano' });
}