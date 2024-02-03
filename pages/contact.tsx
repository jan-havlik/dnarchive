import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div>
      <Typography variant="h6">Primary Contact</Typography>
      <Typography>
        For general inquiries about <em>DNArchive</em>, please contact:
      </Typography>
      <Typography>
        <strong>Name:</strong> prof. Václav Brázda
      </Typography>
      <Typography>
        <strong>Email:</strong> vaclav@ibp.cz
      </Typography>

      <Divider />

      <Typography variant="h6">Technical Support Information</Typography>
      <Typography>
        For technical support, bug reports, or feature requests related to{" "}
        <em>DNArchive</em>, please reach out to our support team:
      </Typography>
      <Typography>
        <strong>Support Email:</strong> jan.havlik@protonmail.com
      </Typography>
      <Typography>
        <strong>GitHub Issues:</strong>{" "}
        <a href="https://github.com/jan-havlik/dnarchive-server/issues">
          github.com/jan-havlik/dnarchive-server/issues
        </a>
      </Typography>

      <Divider />

      <Typography variant="h6">Collaboration and Feedback</Typography>
      <Typography>
        We are always looking for opportunities to collaborate and improve{" "}
        <em>DNArchive</em>. If you have suggestions, feedback, or are interested
        in collaborating with us, please contact:
      </Typography>
      <Typography>
        <strong>Collaboration Inquiries:</strong> vaclav@ibp.cz
      </Typography>
    </div>
  );
};

export default Contact;
