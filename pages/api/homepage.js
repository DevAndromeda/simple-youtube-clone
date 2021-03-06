import YouTube from "youtube-sr";

export default async (req, res) => {
    const entry = Date.now();
    return res.json({
        data: await YouTube.homepage()
            .then((x) => x.map((m) => m.toJSON()))
            .catch((e) => []),
        time: Date.now() - entry
    });
};
