export default function handler(req, res) {
    res.status(200).json({ user: { firstName: 'Dmitry', lastName: 'Sergeev' } })
}
